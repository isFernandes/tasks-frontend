import React, {FormEvent, useState} from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./App.css";
import mainImg from "./assets/mainImg.png";
import Task from "./components/Task";
import {api} from './services/api';

const App: React.FC =() => {
  const [description, setDescription] = useState('');
  const [done, setDone] = useState(false);

  const createTask = async (e: FormEvent)=>{
    e.preventDefault();
    setDone(false);
    await api.post('/createTask', {
      description,
      done
    })
    .then(()=>{
        alert("Tarefa criada com sucesso!");
      })
    .catch(()=>{
        alert("Erro ao criar sua tarefa! :(");
      });

    setDescription('');
  }

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
            onChange={(e)=>{setDescription(e.target.value)}}
          />
          <Button 
          className="button" variant="contained" color="primary"
          type="submit"
          >
            Adicionar
          </Button>
        </FormArea>
      </EnterData>
      <List>
        <Task />
      </List>
    </Container>
  );
}

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
`;
