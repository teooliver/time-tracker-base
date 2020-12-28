import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Stopwatch from "./components/Stopwatch";
import EventsTable from "./components/EventsTable";

function App() {
  return (
    <div className='App'>
      <Stopwatch />
      <EventsTable />
    </div>
  );
}

export default App;
