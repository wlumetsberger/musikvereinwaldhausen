import { Event } from './eventsService';
import ical from 'ical';
import fetch from 'node-fetch';

const ICAL_URL = 'https://calendar.google.com/calendar/ical/mv.waldhausenimstrudengau%40gmail.com/public/basic.ics';

function formatICalEvent(icalEvent: any): Event & { rawDate: Date } | null {
  try {
    if (!icalEvent.start || !icalEvent.summary) {
      return null;
    }

    const startDate = new Date(icalEvent.start);
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    const formattedDate = startDate.toLocaleDateString('de-DE', options);
    
    let formattedDateTime = formattedDate;
    if (icalEvent.start && startDate.getHours() !== 0) {
      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit'
      };
      const timeString = startDate.toLocaleTimeString('de-DE', timeOptions);
      formattedDateTime = `${formattedDate}, ${timeString} Uhr`;
    }

    const location = icalEvent.location || 'Ort wird noch bekanntgegeben';
    
    let description = icalEvent.description || 'Keine Details verfügbar';
    description = description.replace(/<[^>]*>?/gm, '');

    return {
      id: icalEvent.uid || String(startDate.getTime()),
      title: icalEvent.summary,
      date: formattedDateTime,
      location: location,
      description: description,
      rawDate: startDate // <-- Add raw date for filtering/sorting
    };
  } catch (error) {
    console.error('Error formatting iCal event:', error);
    return null;
  }
}

export async function fetchCalendarEvents(): Promise<Event[]> {
  try {
    const response = await fetch(ICAL_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch iCal data: ${response.status} ${response.statusText}`);
    }
    const icalData = await response.text();
    const parsedData = ical.parseICS(icalData);
    const events = Object.values(parsedData)
      .filter((event: any) => event.type === 'VEVENT')
      .map((event: any) => formatICalEvent(event))
      .filter((event: any) => event !== null) as (Event & { rawDate: Date })[];

    // Use a fresh date for today at midnight (do not mutate now)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Only show events that are today or in the future
    const futureEvents = events.filter(event => event.rawDate >= today);

    // Sort by rawDate
    futureEvents.sort((a, b) => a.rawDate.getTime() - b.rawDate.getTime());

    // Remove rawDate before returning
    return futureEvents.map(({ rawDate, ...rest }) => rest);
  } catch (error) {
    console.error('Error fetching iCal events:', error);
    return [];
  }
}

function getDateFromGermanFormat(germanDate: string): Date {
  const parts = germanDate.split(' ');
  const day = parseInt(parts[0]);
  const monthMap: {[key: string]: number} = {
    'Januar': 0, 'Februar': 1, 'März': 2, 'April': 3, 'Mai': 4, 'Juni': 5,
    'Juli': 6, 'August': 7, 'September': 8, 'Oktober': 9, 'November': 10, 'Dezember': 11
  };
  const month = monthMap[parts[1]];
  const year = parseInt(parts[2]);
  return new Date(year, month, day);
}
