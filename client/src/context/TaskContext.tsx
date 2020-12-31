import React, { createContext, useState } from "react";
import { ITask } from "../interfaces/task";

interface TaskContextDefaults {
  task?: ITask;
  setTask?: React.Dispatch<React.SetStateAction<ITask>>;
}

export const TaskContext = createContext<TaskContextDefaults>({});

const TaskProvider = (props: any) => {
  const [task, setTask] = useState<ITask>();
  console.log(task);

  return <TaskContext.Provider value={{ task, setTask }} {...props} />;
};

export default TaskProvider;
