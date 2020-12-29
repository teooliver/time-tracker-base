import React, { FC, useContext } from "react";
import { EventsContext } from "../context/EventsContext";
import { EventsData } from "../interfaces/Events";
import ThreeDotsVertical from "../icons/ThreeDotsVertical";
import { calculateTimer } from "../helper/Timer";

interface EventsTableProps {
  // laps: ILapData;
}

const EventsTable: FC<EventsTableProps> = () => {
  // const totalTime = laps.laps.reduce(function (a, b) {
  //   return a + b;
  // }, 0);
  //@ts-ignore
  const { events }: { events: EventsData } = useContext(EventsContext);
  return (
    <ul className='EventsTable'>
      <li className='list-item'>
        <span> Task</span>
        <span>Duration</span>
      </li>
      {events.map((event, i) => {
        const [hours, minutes, seconds] = calculateTimer(event.time);
        return (
          <li className='list-item' key={event.name + i}>
            <span> {event.name}</span>
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
