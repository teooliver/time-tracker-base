import { EventsData, IEvent } from "../interfaces/Events";

export let events: EventsData = [];

export const createEvent = (event: IEvent) => {
  events.push(event);
  console.log(events);
};
