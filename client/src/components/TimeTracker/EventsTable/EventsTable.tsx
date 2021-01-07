import React, { FC } from "react";
import { useQuery } from "react-query";
import { calculateTimer } from "../../../utils/timer";
import { getTasksGroupedByDate } from "../../../utils/api-client";
import EventRow from "./EventRow";

const EventsTable = () => {
  const { data: groupedTasks, isLoading, isSuccess, isError } = useQuery(
    "tasks",
    getTasksGroupedByDate
  );

  return (
    <>
      {isLoading && <div>Loading</div>}
      {isSuccess &&
        groupedTasks &&
        groupedTasks.map((group) => {
          const [hours, minutes, seconds] = calculateTimer(
            Math.round(group.totalTime)
          );
          return (
            <ul className='EventsTable'>
              <li className='day-header'>
                <span>{group._id}</span>
                <span className='day-total'>
                  {hours}:{minutes}:{seconds}
                </span>
              </li>
              {group.tasks &&
                group.tasks.map((task) => (
                  <EventRow key={task._id} task={task} />
                ))}
            </ul>
          );
        })}

      {isError && (
        <div>
          <p>No Data Available</p>
        </div>
      )}
    </>
  );
};

export default EventsTable;
