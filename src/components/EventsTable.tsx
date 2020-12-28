import { FC, useContext } from "react";
import { ILapData } from "../interfaces/Laps";
import { events } from "../helper/Events";
import { EventsContext } from "../context/EventsContext";
import { EventsData } from "../interfaces/Events";

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
    <div>
      {events.map((event, i) => {
        return (
          <p key={event.name + i}>
            {event.name} | {event.time}
          </p>
        );
      })}
    </div>
  );
  return null;
};

export default EventsTable;
