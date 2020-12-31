import { ITask } from "../interfaces/task";

export const API_URL = "http://localhost:5000/tasks";

export const fetchTasks = async () => {
  const res = await fetch(API_URL).then((res) => res.json());
  return res as ITask[];
};

export const createTask = async (newTask: ITask) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  }).then((res) => res.json());

  return res as ITask[];
};

export const updateTask = async (task: ITask) => {
  const res = await fetch(`${API_URL}/${task._id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  }).then((res) => res.json());

  return res as ITask;
};

export const deleteTask = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
