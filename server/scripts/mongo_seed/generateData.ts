import faker from 'faker';
import { Client } from '../../models/client';

const createClient = () => {
  let fakeClient = {
    name: faker.company.companyName(),
  };
  return fakeClient;
};

const generateClientsData = (amount: number) => {
  let clients = [];
  for (let i: number = 0; i < amount; i++) {
    clients.push(createClient());
  }
  return clients;
};

const clientsList = generateClientsData(5);
const jsonClientList = JSON.stringify(clientsList);
console.log(jsonClientList);

const saveFakeClientsData = async () => {
  try {
    // @ts-ignore
    await Client.create(jsonClientList);
    console.log('success');
  } catch (error) {
    console.log(error);
  }
};

saveFakeClientsData();
