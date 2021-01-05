import React, { FC } from "react";
import { useQuery } from "react-query";
import { calculateTimer } from "../../helper/Timer";
import { getTasksGroupedByDate } from "../../utils/api-client";
import EventRow from "./EventRow";

// interface EventsTableProps {
//   // laps: ILapData;
// }

const EventsTable = () => {
  // const totalTime = laps.laps.reduce(function (a, b) {
  //   return a + b;
  // }, 0);

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
              <li className='list-item'>
                <span>{group._id}</span>
                <span>
                  Total: {hours}:{minutes}:{seconds}
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
