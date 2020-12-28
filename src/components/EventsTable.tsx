import { FC } from "react";
import { ILapData } from "../interfaces/Laps";
import { events } from "../helper/Events";

interface EventsTableProps {
  // laps: ILapData;
}

const EventsTable: FC<EventsTableProps> = () => {
  // const totalTime = laps.laps.reduce(function (a, b) {
  //   return a + b;
  // }, 0);

  return (
    <div>
      {events.map((event, i) => {
        return (
          <p key={event.event + i}>
            {event.event} | {event.time}
          </p>
        );
      })}
    </div>
  );
  return null;
};

export default EventsTable;
