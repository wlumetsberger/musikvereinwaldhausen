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

export async function getMusicData(): Promise<MusicCategory[]> {
  try {
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
