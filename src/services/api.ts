import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const create = async (description: string) => {
  await api.post("/createTask", { description, done: false });
};

export const deleteTask = async (taskId: any) => {
  await api
    .delete(`/deleteTask/${taskId}`)
    .then(() => alert("Tarefa deletada com sucesso! :)"))
    .catch(() => {
      alert("Algo deu errado! :(");
    });
};

export const updateDone = async (taskId: any, taskDone: boolean) => {
  await api
    .put(`/doneTask/${taskId}`, { done: !taskDone })
    .then(() => {
      console.log("Tarefa Finalizada!");
    })
    .catch(() => {
      alert("Não conseguimos atualizar sua tarefa, tente de novo por gentileza");
    });
};

export const updateTask = async (taskId: any, taskDescription: string) => {
    await api
      .put(`/updateTask/${taskId}`, { description: taskDescription })
      .then(() => {
        alert("Tarefa atualizada");
      })
      .catch(() => {
        alert("Não conseguimos atualizar sua tarefa, tente de novo por gentileza");
      });
  };

  export const doneAllTask = async () => {
    await api
      .put("/checkAll")
      .then(() => {
        alert("Todas tarefas marcadas");
      })
      .catch(() => {
        alert("Não conseguimos marcar sua tarefa, tente de novo por gentileza");
      });
  };

  export const undoneAllTask = async () => {
    await api
      .put("/uncheckAll")
      .then(() => {
        alert("Todas tarefas desmarcadas");
      })
      .catch(() => {
        alert("Não conseguimos desmarcada sua tarefa, tente de novo por gentileza");
      });
  };