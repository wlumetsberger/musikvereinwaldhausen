import Link from 'next/link';
import { getAllNews } from '../services/newsService';

export const metadata = {
  title: 'Neuigkeiten | Musikverein Waldhausen',
  description: 'Aktuelle Neuigkeiten des Musikvereins Waldhausen',
};

export default async function NewsPage() {
  const newsItems = await getAllNews();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[var(--primary)] mb-8 pb-2 border-b border-[var(--primary-dark)]">Neuigkeiten</h1>
      
      {/* Breadcrumb navigation */}
      <div className="mb-8">
        <div className="flex items-center text-sm">
          <Link href="/" className="text-[var(--primary)] hover:text-[var(--primary-dark)] hover:underline">
            Startseite
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="font-medium">Neuigkeiten</span>
        </div>
      </div>
      
      {/* News list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((news) => (
          <div key={news.artikelnr} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 transform hover:-translate-y-1 flex flex-col h-full group">
            <div className="h-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>
            <div className="p-6 flex-grow">
              <span className="inline-block text-xs font-semibold text-[var(--primary)] uppercase tracking-wider mb-3 py-1 px-3 bg-[var(--accent)] rounded-full">Neuigkeit</span>
              <h2 className="text-xl font-bold text-[var(--secondary)] mb-4 group-hover:text-[var(--secondary-dark)] transition-colors">{news.titel}</h2>
              <p className="mb-4 text-sm italic text-gray-600 bg-[var(--accent)] p-3 rounded-lg">{news.sample}</p>
              <p className="mb-6 flex-grow line-clamp-3 text-gray-700">{news.text}</p>
            </div>
            <div className="px-6 pb-6 mt-auto">
              <Link 
                href={`/news/${news.artikelnr}`} 
                className="inline-flex items-center text-[var(--primary)] hover:text-[var(--primary-dark)] font-medium"
              >
                <span>Weiterlesen</span>
                <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}