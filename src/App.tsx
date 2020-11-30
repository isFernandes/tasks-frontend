import React, { FormEvent, useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./App.css";
import mainImg from "./assets/mainImg.png";
import TaskItem, { Task } from "./components/Task";
import { api, create, doneAllTask, undoneAllTask } from "./services/api";

const App: React.FC = () => {
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const response = await api.get("/getAll");

      setTasks(response.data);
    };

    getTasks();
  }, [tasks]);

  const createTask = async (e: FormEvent) => {
    e.preventDefault();
    if (description !== "") {
      await create(description);
    }else{
      alert("Conteudo da tarefa esta vazio, por gentileza insira algo!")
    }
    setDescription("");
  };

  return (
    <Container>
      <EnterData>
        <Img src={mainImg} />
        <FormArea onSubmit={createTask} className="formArea">
          <TextField
            value={description}
            id="addTaskFiel"
            label="Adicione uma tarefa..."
            variant="standard"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <Button
            className="button"
            variant="contained"
            color="primary"
            type="submit"
          >
            Adicionar
          </Button>
        </FormArea>
      </EnterData>
      <List>
        {tasks.map((task: Task) => {
          return <TaskItem key={task._id} task={task} />;
        })}
      </List>

        <ButtonArea>
          <DefaulButton id="doneAll" onClick={()=>{doneAllTask()}}>Finalizar todas</DefaulButton>
          <DefaulButton id="undoneAll" onClick={()=>{undoneAllTask()}}>Reiniciar todas</DefaulButton>
        </ButtonArea>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-width: 100%;
  min-height: 100vh;
  background-color: #3b4351;
  flex-direction: column;
`;

const EnterData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  flex-direction: column;
  padding: 10px;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const FormArea = styled.form`
  display: flex;
  flex-direction: row;
  flex: 1;
  max-height: 55px;
`;

const List = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  max-height: 
`;

const ButtonArea = styled.div`
  display: flex;
  align-self: flex-end;
  flex:1;
  max-height: 55px;
  min-width: 300px;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 25px;

`;

const DefaulButton = styled.button`
  padding:10px;
  border: 0px solid black;
  border-radius: 5px;
`;

