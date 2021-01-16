// import { IClientTask, IDbTask, GroupedTasks } from '../interfaces/task';

export const API_URL = 'http://localhost:5000';

// export const fetchTasks = async () => {
//   const res = await fetch(`${API_URL}/tasks`).then((res) => res.json());
//   return res as IDbTask[];
// };

// export const createTask = async (newTask: IClientTask) => {
//   const res = await fetch(`${API_URL}/tasks`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newTask),
//   }).then((res) => res.json());

//   return res as IDbTask[];
// };

// export const updateTask = async (task: IDbTask) => {
//   const res = await fetch(`${API_URL}/tasks/${task._id}`, {
//     method: "PATCH",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(task),
//   }).then((res) => res.json());

//   return res as IDbTask;
// };

// export const deleteTask = async (id: string) => {
//   const res = await fetch(`${API_URL}/tasks/${id}`, {
//     method: "DELETE",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   }).then((res) => res.json());

//   return res as IDbTask;
// };

// export const getTasksGroupedByDate = async () => {
//   const res = await fetch(`${API_URL}/tasks/group`).then((res) => res.json());
//   return res as GroupedTasks[];
// };

// export const fetchProjects = async () => {
//   const res = await fetch(`${API_URL}/projects`).then((res) => res.json());
//   return res as IDbTask[];
// };
