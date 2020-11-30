import React, { useState } from "react";
import styled from "styled-components";

import AccessTimeIcon from "@material-ui/icons/AccessTime";
import DoneIcon from "@material-ui/icons/Done";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DoneAllIcon from "@material-ui/icons/DoneAll";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { deleteTask, updateDone, updateTask } from "../services/api";

export interface Task {
  _id: any;
  description: string;
  done: boolean;
}
interface TaskItemProps {
  task: Task;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const Task: React.FC<TaskItemProps> = ({ task }) => {
  const [open, setOpen] = useState(false);
  const [modifiedTask, setModifiedTask] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  function FormDialog(open: boolean) {
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edite sua tarefa</DialogTitle>
          <DialogContent>
            <TextField
              value={modifiedTask}
              onChange={(e) => {
                setModifiedTask(e.target.value);
              }}
              autoFocus
              margin="dense"
              id="newTask"
              label="Nova tarefa"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button
              onClick={() => {
                updateTask(task._id, modifiedTask);
                handleClose();
              }}
              color="primary"
            >
              Atualizar tarefa
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  function renderTaskDone() {
    if (task.done === true) {
      return (
        <Container>
          <CheckCircleOutlineIcon
            style={{ color: "#696969" }}
            fontSize="large"
          />
          <Content
            style={{ textDecorationLine: "line-through", color: "#696969" }}
          >
            {task.description}
          </Content>
          <DoneAndRemoveArea>
            <Button
              onClick={() => {
                updateDone(task._id, task.done);
              }}
            >
              <DoneAllIcon color="primary" />
            </Button>
            <Button
              onClick={() => {
                setOpen(true);
                console.log("cliquei");
              }}
            >
              <EditIcon color="error" />
            </Button>
            <Button
              onClick={() => {
                deleteTask(task._id);
                console.log("cliquei");
              }}
            >
              <DeleteForeverIcon color="secondary" />
            </Button>
          </DoneAndRemoveArea>
        </Container>
      );
    }

    return (
      <Container>
        <AccessTimeIcon fontSize="large" />
        <Content> {task.description} </Content>
        <DoneAndRemoveArea>
          <Button
            onClick={() => {
              updateDone(task._id, task.done);
              console.log("cliquei");
            }}
          >
            <DoneIcon color="primary" />
          </Button>
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            <EditIcon color="error" />
          </Button>
          <Button
            onClick={() => {
              deleteTask(task._id);
              console.log("cliquei");
            }}
          >
            <DeleteForeverIcon color="secondary" />
          </Button>
        </DoneAndRemoveArea>
      </Container>
    );
  }

  return (
    <>
      {renderTaskDone()}
      {FormDialog(open)}
    </>
  );
};

export default Task;

const Container = styled.div`
  max-height: 120px;
  min-width: 500px;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  margin: 10px 0;
  box-shadow: 10px 10px 5px rgba(98, 108, 124, 0.15);
  border: 1.5px solid rgba(98, 108, 124, 0.15);
`;

const Content = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  padding: 15px;
`;

const DoneAndRemoveArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
