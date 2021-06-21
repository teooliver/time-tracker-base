import React from 'react';
import EventsTable from '../components/TimeTracker/EventsTable/EventsTable';
import Stopwatch from '../components/TimeTracker/StopWatch/Stopwatch';

const TimeTracker = () => {
  return (
    <section className='TimeTracker'>
      <Stopwatch />
      <EventsTable />
    </section>
  );
};

export default TimeTracker;
