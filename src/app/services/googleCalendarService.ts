// iCalendar integration for Google Calendar
import { Event } from './eventsService';
import ical from 'ical';
import fetch from 'node-fetch';

// iCalendar URL for the Musikverein Waldhausen's public calendar
const ICAL_URL = 'https://calendar.google.com/calendar/ical/mv.waldhausenimstrudengau%40gmail.com/public/basic.ics';

// Format an iCalendar event to match our Event interface
function formatICalEvent(icalEvent: any): Event | null {
  try {
    // Skip events without start date or summary
    if (!icalEvent.start || !icalEvent.summary) {
      return null;
    }

    // Extract date information
    const startDate = new Date(icalEvent.start);
    // Format the date in German style (DD. Month YYYY)
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    const formattedDate = startDate.toLocaleDateString('de-DE', options);
    
    // Add time information if available
    let formattedDateTime = formattedDate;
    if (icalEvent.start && icalEvent.start.getHours() !== 0) {
      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit'
      };
      const timeString = startDate.toLocaleTimeString('de-DE', timeOptions);
      formattedDateTime = `${formattedDate}, ${timeString} Uhr`;
    }

    // Extract location or provide a default
    const location = icalEvent.location || 'Ort wird noch bekanntgegeben';
    
    // Extract description or provide a default
    let description = icalEvent.description || 'Keine Details verfügbar';
    
    // Clean up description (remove HTML tags if present)
    description = description.replace(/<[^>]*>?/gm, '');

    // Create event object matching our interface
    return {
      id: icalEvent.uid || String(startDate.getTime()),
      title: icalEvent.summary,
      date: formattedDateTime,
      location: location,
      description: description
    };
  } catch (error) {
    console.error('Error formatting iCal event:', error);
    return null;
  }
}

// Fetch upcoming events from Google Calendar via iCal
export async function fetchCalendarEvents(): Promise<Event[]> {
  try {
    // Fetch the iCal data from the public URL
    const response = await fetch(ICAL_URL);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch iCal data: ${response.status} ${response.statusText}`);
    }
    
    const icalData = await response.text();
    
    // Parse the iCal data
    const parsedData = ical.parseICS(icalData);
    // Filter for VEVENT entries (actual calendar events)
    const events = Object.values(parsedData)
      .filter((event: any) => event.type === 'VEVENT')
      .map((event: any) => formatICalEvent(event))
      .filter((event: any) => event !== null) as Event[];
    
    // Filter for future events only
    const today = new Date();
    const futureEvents = events.filter(event => {
      const eventDate = getDateFromGermanFormat(event.date);
      return eventDate >= today;
    });
    
    // Sort by date (earliest first)
    return futureEvents.sort((a, b) => {
      const dateA = getDateFromGermanFormat(a.date);
      const dateB = getDateFromGermanFormat(b.date);
      return dateA.getTime() - dateB.getTime();
    });
  } catch (error) {
    console.error('Error fetching iCal events:', error);
  }
}

// Helper function to parse German formatted dates
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
