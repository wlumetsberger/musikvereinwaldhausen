// Types for our events data
export interface Event {
  id: number | string;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl?: string;
}

import { fetchCalendarEvents } from './googleCalendarService';

/**
 * Fetch all upcoming events
 */
export async function getUpcomingEvents(): Promise<Event[]> {
  // Fetch events from Google Calendar
  return fetchCalendarEvents();
}

/**
 * Fetch a specific event by ID
 */
export async function getEventById(id: number | string): Promise<Event | undefined> {
  // Fetch all events and find the one with matching ID
  const allEvents = await fetchCalendarEvents();
  return allEvents.find(event => event.id === id);
}