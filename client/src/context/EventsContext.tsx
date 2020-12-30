import React, { createContext, useState } from "react";
import { EventsData } from "../interfaces/Events";

interface EventContextValues {
  events?: EventsData;
  setEvents?: React.Dispatch<React.SetStateAction<EventsData>>;
}

export const EventsContext = createContext<EventContextValues>({});

const EventsProvider = (props: any) => {
  const [events, setEvents] = useState<EventsData>([]);

  return <EventsContext.Provider value={{ events, setEvents }} {...props} />;
};

export default EventsProvider;
