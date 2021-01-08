import { useQuery } from "react-query";
import { GroupedTasks } from "../interfaces/task";
import { API_URL } from "../utils/api-client";

const getTasksGroupedByDate = async () => {
  const res = await fetch(`${API_URL}/tasks/group`).then((res) => res.json());
  return res as GroupedTasks[];
};

export const useGetGroupedTasks = () => {
  return useQuery("tasks", getTasksGroupedByDate);
};
