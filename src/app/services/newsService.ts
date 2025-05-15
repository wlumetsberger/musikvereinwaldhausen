import fs from 'fs';
import path from 'path';

export interface NewsItem {
  articleId: string;
  titel: string;
  sample: string;
  pictureUrl: string;
  text: string;
}

export async function getAllNews(): Promise<NewsItem[]> {
  try {
    const filePath = path.join(process.cwd(), 'src/data/news.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const newsData: NewsItem[] = JSON.parse(fileContents);
    return newsData;
  } catch (error) {
    console.error('Error loading news data:', error);
    return [];
  }
}


export async function getFirstFiveNews(): Promise<NewsItem[]> {
  const allNews = await getAllNews();
  return allNews.slice(0, 3);
}

export async function getNewsById(id: string): Promise<NewsItem | undefined> {
  const allNews = await getAllNews();
  return allNews.find(news => news.articleId === id);
}
