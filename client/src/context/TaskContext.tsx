import React, { createContext, useState } from "react";
import { IClientTask } from "../interfaces/task";

interface TaskContextDefaults {
  task: IClientTask;
  setTask: React.Dispatch<React.SetStateAction<IClientTask>>;
}

const defaultTask: IClientTask = {
  name: "",
  timeInSeconds: 0,
  endTime: new Date(),
  initialTime: new Date(),
};

export const TaskContext = createContext<TaskContextDefaults>({
  task: defaultTask,
  setTask: () => {},
});

const TaskProvider = (props: any) => {
  const [task, setTask] = useState<IClientTask>(defaultTask);

  return <TaskContext.Provider value={{ task, setTask }} {...props} />;
};

export default TaskProvider;
