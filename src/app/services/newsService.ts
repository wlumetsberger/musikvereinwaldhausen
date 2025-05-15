// filepath: c:\workspaces_privat\musikverein\website\src\app\services\newsService.ts
import fs from 'fs';
import path from 'path';

// Types for our news data - matching the structure in news.json
export interface NewsItem {
  articleId: string;
  titel: string;
  sample: string;
  pictureUrl: string;
  text: string;
}

/**
 * Fetch all news items from the JSON file
 */
export async function getAllNews(): Promise<NewsItem[]> {
  try {
    // Read the JSON file
    const filePath = path.join(process.cwd(), 'src/data/news.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const newsData: NewsItem[] = JSON.parse(fileContents);
    return newsData;
  } catch (error) {
    console.error('Error loading news data:', error);
    return [];
  }
}

/**
 * Fetch only the first 3 news items
 * This is useful for showing a preview on the homepage
 */
export async function getFirstFiveNews(): Promise<NewsItem[]> {
  const allNews = await getAllNews();
  return allNews.slice(0, 3);
}

/**
 * Fetch a specific news item by ID
 */
export async function getNewsById(id: string): Promise<NewsItem | undefined> {
  const allNews = await getAllNews();
  return allNews.find(news => news.articleId === id);
}
