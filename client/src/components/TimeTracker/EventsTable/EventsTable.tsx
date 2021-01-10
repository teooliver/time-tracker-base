import React from "react";
import format from "date-fns/format";
import { calculateTimer } from "../../../utils/timer";
import EventRow from "./EventRow";
import { useGetGroupedTasks } from "../../../hooks/useGetGroupedTasks";

const EventsTable = () => {
  const {
    data: groupedTasks,
    isLoading,
    isSuccess,
    isError,
  } = useGetGroupedTasks();

  return (
    <>
      {isLoading && <div>Loading</div>}

      {isSuccess &&
        groupedTasks?.map((group) => {
          const [hours, minutes, seconds] = calculateTimer(
            Math.round(group.totalTime)
          );
          return (
            <ul className='EventsTable'>
              <li className='date-header'>
                <span>{format(new Date(group._id), "EEE, dd LLL")}</span>
                <span className='day-total'>
                  {hours}:{minutes}:{seconds}
                </span>
              </li>
              {group.tasks.map((task) => (
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
