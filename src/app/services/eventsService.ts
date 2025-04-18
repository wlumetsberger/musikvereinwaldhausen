// Types for our events data
export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl?: string;
}

// Sample events data - this would be replaced with data from your API
const sampleEventsData: Event[] = [
  {
    id: 1,
    title: "Frühlingskonzert",
    date: "15. Mai 2025",
    location: "Musikhalle, Hauptstraße 123",
    description: "Unser traditionelles Frühlingskonzert mit klassischen und modernen Stücken.",
    imageUrl: "/images/fruehlingskonzert.jpg"
  },
  {
    id: 2,
    title: "Dorffest Auftritt",
    date: "20. Juni 2025",
    location: "Dorfplatz",
    description: "Musikalische Begleitung des jährlichen Dorffestes mit traditionellen Melodien.",
    imageUrl: "/images/dorffest.jpg"
  },
  {
    id: 3,
    title: "Sommerkonzert im Park",
    date: "12. Juli 2025",
    location: "Stadtpark",
    description: "Open-Air Konzert mit leichten Sommerstücken für die ganze Familie.",
    imageUrl: "/images/sommerkonzert.jpg"
  }
];

/**
 * Fetch all upcoming events
 */
export async function getUpcomingEvents(): Promise<Event[]> {
  // In a real implementation, you would fetch from an API:
  // const response = await fetch('https://your-api-url/events');
  // const data = await response.json();
  // return data;
  
  // For now, we'll return the sample data
  return sampleEventsData;
}

/**
 * Fetch a specific event by ID
 */
export async function getEventById(id: number): Promise<Event | undefined> {
  // In a real implementation, you would fetch a specific item:
  // const response = await fetch(`https://your-api-url/events/${id}`);
  // const data = await response.json();
  // return data;
  
  // For now, we'll filter the sample data
  return sampleEventsData.find(event => event.id === id);
}