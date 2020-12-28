import React, { createContext, useState } from "react";
import { EventsData } from "../interfaces/Events";

export const EventsContext = createContext<EventsData>([]);

const EventsProvider = () => {
  const [events, setEvents] = useState<EventsData>([]);

  return <EventsContext.Provider value={events} />;
};

export default EventsProvider;
