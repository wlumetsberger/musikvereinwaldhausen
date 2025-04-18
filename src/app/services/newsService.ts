// Types for our news data
export interface NewsItem {
  artikelnr: number;
  titel: string;
  sample: string;
  text: string;
}

// Sample news data - this would be replaced with data from your JSON file or API
const sampleNewsData: NewsItem[] = [
  {
    artikelnr: 1,
    titel: "Neue Uniformen für den Musikverein",
    sample: "Nach 15 Jahren wurden die Trachten des Musikvereins erneuert.",
    text: "Mit großer Freude präsentieren wir unsere neuen traditionellen Trachten, die in den Vereinsfarben Grün und Rot gehalten sind. Die Filzjacken wurden von lokalen Handwerkern gefertigt und repräsentieren die lange Tradition unseres Vereins."
  },
  {
    artikelnr: 2,
    titel: "Erfolgreiche Teilnahme am Landeswettbewerb",
    sample: "Der Musikverein erreichte den 2. Platz beim diesjährigen Landeswettbewerb.",
    text: "Mit einer herausragenden Interpretation klassischer und moderner Stücke konnte unser Orchester die Jury überzeugen und den zweiten Platz im prestigeträchtigen Landeswettbewerb erringen."
  },
  {
    artikelnr: 3,
    titel: "Jungmusiker-Programm startet im Herbst",
    sample: "Neue Kurse für Nachwuchsmusiker ab September.",
    text: "Ab September bietet der Musikverein wieder Kurse für junge Musikbegeisterte an. Erfahrene Musiker des Vereins unterrichten verschiedene Instrumente und Musiktheorie für Kinder ab 8 Jahren."
  }
];

/**
 * Fetch all news items
 * In a real-world scenario, this would fetch from a JSON file or an API
 */
export async function getAllNews(): Promise<NewsItem[]> {
  // In a real implementation, you would fetch data from an API or JSON file like this:
  // const response = await fetch('https://your-api-url/news');
  // const data = await response.json();
  // return data;
  
  // For now, we'll return the sample data
  return sampleNewsData;
}

/**
 * Fetch a specific news item by ID
 */
export async function getNewsById(id: number): Promise<NewsItem | undefined> {
  // In a real implementation, you could fetch a specific item:
  // const response = await fetch(`https://your-api-url/news/${id}`);
  // const data = await response.json();
  // return data;
  
  // For now, we'll filter the sample data
  return sampleNewsData.find(news => news.artikelnr === id);
}

/**
 * This function would be used to load news from a local JSON file
 */
export async function loadNewsFromJson(filePath: string): Promise<NewsItem[]> {
  try {
    // In a server context, you could use:
    // const fs = require('fs');
    // const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    // return data;
    
    // In a client context, you would use fetch:
    const response = await fetch(filePath);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading news from JSON:", error);
    return [];
  }
}