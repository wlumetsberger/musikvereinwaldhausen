import { promises as fs } from 'fs';
import path from 'path';

export interface MusicItem {
  title: string;
  path: string;
  description: string;
}

export interface MusicCategory {
  name: string;
  items: MusicItem[];
}

// This is a server-side function to get music data from the file system
export async function getMusicData(): Promise<MusicCategory[]> {
  try {
    // Define hardcoded data for now
    // In a real implementation, you might want to:
    // 1. Read directories dynamically
    // 2. Extract metadata from MP3s
    // 3. Use a database or API to manage descriptions
    
    return [
      {
        name: "Jugendorchester Waldis",
        items: [
          {
            title: "Football",
            path: "/music/Jugendorchester Waldis/02 Football.mp3",
            description: "Eine energiegeladene Interpretation unseres Jugendorchesters.",
          },
        ],
      },
      {
        name: "Musikverein",
        items: [
          {
            title: "Caledonia",
            path: "/music/Musikverein/07 Caledonia.mp3",
            description: "Eine stimmungsvolle Darbietung unseres Musikvereins.",
          },
          {
            title: "Die Tauben von San Marco",
            path: "/music/Musikverein/08 Die Tauben von San Marco.mp3",
            description: "Ein klassisches Stück, interpretiert vom Musikverein Waldhausen.",
          },
          {
            title: "Moana",
            path: "/music/Musikverein/10 Moana.mp3",
            description: "Eine bezaubernde Melodie aus dem Disney-Film, gespielt von unserem Orchester.",
          },
          {
            title: "Häuserers Wirtshauspolka",
            path: "/music/Musikverein/11 Häuserers Wirtshauspolka.mp3",
            description: "Eine traditionelle österreichische Polka in der Interpretation des Musikvereins.",
          },
        ],
      },
    ];
  } catch (error) {
    console.error("Error loading music data:", error);
    return [];
  }
}
