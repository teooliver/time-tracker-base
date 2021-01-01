import React from "react";
import Stopwatch from "./components/Stopwatch";
import EventsTable from "./components/EventsTable/EventsTable";

function App() {
  return (
    <div className='App'>
      <Stopwatch />
      <EventsTable />
    </div>
  );
}

export default App;
