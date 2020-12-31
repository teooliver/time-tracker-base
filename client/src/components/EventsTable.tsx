import React, { FC } from "react";
import ThreeDotsVertical from "../icons/ThreeDotsVertical";
import { calculateTimer } from "../helper/Timer";
import { useQuery } from "react-query";
import { fetchTasks } from "../utils/api-client";

interface EventsTableProps {
  // laps: ILapData;
}

const EventsTable: FC<EventsTableProps> = () => {
  // const totalTime = laps.laps.reduce(function (a, b) {
  //   return a + b;
  // }, 0);

  const { data: tasks } = useQuery("tasks", fetchTasks);

  console.log(tasks);
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
                <span>
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
