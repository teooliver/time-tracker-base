import React, { FC } from "react";
import ThreeDotsVertical from "../icons/ThreeDotsVertical";
import { calculateTimer } from "../helper/Timer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteTask, fetchTasks } from "../utils/api-client";

interface EventsTableProps {
  // laps: ILapData;
}

const EventsTable: FC<EventsTableProps> = () => {
  // const totalTime = laps.laps.reduce(function (a, b) {
  //   return a + b;
  // }, 0);

  const { data: tasks } = useQuery("tasks", fetchTasks);
  const queryClient = useQueryClient();

  const deletePostMutation = useMutation(deleteTask, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("tasks");
    },
  });

  return (
    <ul className='EventsTable'>
      <li className='list-item'>
        <span> Task</span>
        <span>Duration</span>
      </li>
      {tasks &&
        tasks.map((task, i) => {
          const [hours, minutes, seconds] = calculateTimer(task.timeInSeconds!);
          return (
            <li className='list-item' key={task.name! + i}>
              <span> {task.name}</span>
              <span>
                {hours}:{minutes}:{seconds}
                <span onClick={() => deletePostMutation.mutate(task._id!)}>
                  <ThreeDotsVertical />
                </span>
              </span>
            </li>
          );
        })}
    </ul>
  );
};

export default EventsTable;
