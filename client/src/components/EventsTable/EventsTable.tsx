import React, { FC } from "react";
import ThreeDotsVertical from "../../icons/ThreeDotsVertical";
import { calculateTimer } from "../../helper/Timer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteTask, fetchTasks } from "../../utils/api-client";
import EventRow from "./EventRow";

interface EventsTableProps {
  // laps: ILapData;
}

const EventsTable: FC<EventsTableProps> = () => {
  // const totalTime = laps.laps.reduce(function (a, b) {
  //   return a + b;
  // }, 0);

  const { data: tasks } = useQuery("tasks", fetchTasks);

  return (
    <ul className='EventsTable'>
      <li className='list-item'>
        <span> Task</span>
        <span>Duration</span>
      </li>
      {tasks && tasks.map((task, i) => <EventRow task={task} />)}
    </ul>
  );
};

export default EventsTable;
