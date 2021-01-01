import React, { FC } from "react";
import { useQuery } from "react-query";
import { fetchTasks } from "../../utils/api-client";
import EventRow from "./EventRow";

interface EventsTableProps {
  // laps: ILapData;
}

const EventsTable: FC<EventsTableProps> = () => {
  // const totalTime = laps.laps.reduce(function (a, b) {
  //   return a + b;
  // }, 0);

  const { data: tasks } = useQuery("tasks", fetchTasks);
  const date = new Date();
  return (
    <ul className='EventsTable'>
      <li className='list-item'>
        <span>{date.toLocaleDateString()}</span>
        <span>Total: 08:20:00</span>
      </li>
      {tasks && tasks.map((task) => <EventRow task={task} />)}
    </ul>
  );
};

export default EventsTable;
