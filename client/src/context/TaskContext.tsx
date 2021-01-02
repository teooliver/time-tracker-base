import React, { createContext, useState } from "react";
import { IClientTask } from "../interfaces/task";

interface TaskContextDefaults {
  task?: IClientTask;
  setTask?: React.Dispatch<React.SetStateAction<IClientTask>>;
}

export const TaskContext = createContext<TaskContextDefaults>({});

const TaskProvider = (props: any) => {
  const [task, setTask] = useState<IClientTask>();

  return <TaskContext.Provider value={{ task, setTask }} {...props} />;
};

export default TaskProvider;
