import React from "react";
import EventsTable from "./EventsTable/EventsTable";
import Stopwatch from "./Stopwatch";

const TimeTracker = () => {
  return (
    <section className='TimeTracker'>
      <Stopwatch />
      <EventsTable />
    </section>
  );
};

export default TimeTracker;
