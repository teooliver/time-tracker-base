import { useMutation, useQueryClient } from "react-query";
import { IClientTask, IDbTask } from "../interfaces/task";
import { API_URL } from "../utils/api-client";

const createTask = async (newTask: IClientTask) => {
  console.log(newTask);

  const res = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  }).then((res) => res.json());

  return res as IDbTask[];
};

export const useCreateTask = () => {
  console.log("flskdjlfk");
  const queryClient = useQueryClient();

  const createTaskMutation = useMutation(createTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });

  return createTaskMutation;
};
