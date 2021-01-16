import React, { createContext, useState } from 'react';
import { TaskCreate } from '../hooks/useCreateTask';

interface TaskContextDefaults {
  task: TaskCreate;
  setTask: React.Dispatch<React.SetStateAction<TaskCreate>>;
}

const defaultTask: TaskCreate = {
  name: '',
  timeInSeconds: 0,
  endTime: new Date(),
  initialTime: new Date(),
};

export const TaskContext = createContext<TaskContextDefaults>({
  task: defaultTask,
  setTask: () => {},
});

const TaskProvider = (props: any) => {
  const [task, setTask] = useState<TaskCreate>(defaultTask);

  return <TaskContext.Provider value={{ task, setTask }} {...props} />;
};

export default TaskProvider;
