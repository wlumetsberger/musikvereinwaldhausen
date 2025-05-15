export interface Event {
  id: number | string;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl?: string;
}

import { fetchCalendarEvents } from './googleCalendarService';

export async function getUpcomingEvents(): Promise<Event[]> {
  return fetchCalendarEvents();
}

export async function getEventById(id: number | string): Promise<Event | undefined> {
  const allEvents = await fetchCalendarEvents();
  return allEvents.find(event => event.id === id);
}