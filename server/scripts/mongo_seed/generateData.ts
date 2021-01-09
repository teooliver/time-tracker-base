import mongoose from "mongoose";
import faker from "faker";
// import { IClient } from "../../interfaces/client";
import { Client } from "../../models/client";

const createClient = () => {
  let fakeClient = {
    name: faker.company.companyName(),
  };
  return fakeClient;
};

const generateClientsDate = (amount: number) => {
  let clients = [];
  for (let i: number = 0; i < amount; i++) {
    clients.push(createClient());
  }
  return clients;
};

const clientsList = generateClientsDate(5);
const jsonClientList = JSON.stringify(clientsList);
console.log(jsonClientList);

const saveFakeClientsDate = async () => {
  try {
    // @ts-ignore
    await Client.create(jsonClientList);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

saveFakeClientsDate();

// const createProject = () => {
//   const fakeProject = {
//   name: "fake_project_name",
//   client: clients[0],
//   estimate: "",
//   status: "",
//   subprojects: [],
//   company: "fake_company_name",
//   }
// }

// const createFakeTask = () => {
// const today = new Date()
// const fiveDaysAgo = today.setDate(today.getDate() - 5)

//   const fakeTask = {
//     name: faker.name(),
//     timeInSeconds: 100000000,
//     initialTime: faker.date.between(fiveDaysAgo),
//     endTime: faker.date.past(fiveDaysAgo),
//     project?: faker.company(),
//   }

//   return fakeTask
// }

// const generateTasks = (amount) => {

//   let tasks = [];
//   for (x = 0; x < amount; x++) {
//     tasks.push(createFakeTask());
//   }
//   return tasks;
// }

// generateTasks(15);
