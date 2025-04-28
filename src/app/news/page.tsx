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
      {/* Page header with decorative elements */}
      <div className="relative mb-16">
        {/* Background decorative elements */}
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-[var(--secondary)] opacity-5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-[var(--primary)] opacity-5 rounded-full blur-3xl -z-10"></div>
        
        <div className="inline-block mb-4">
          <span className="py-1 px-3 bg-[var(--secondary)]/10 text-[var(--secondary)] rounded-full text-sm font-semibold">
            NEUIGKEITEN
          </span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">Aktuelle Neuigkeiten</h1>
      
        {/* Breadcrumb navigation */}
        <div className="flex items-center text-sm">
          <Link href="/" className="text-[var(--primary)] hover:text-[var(--primary-dark)] hover:underline transition-colors">
            Startseite
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="font-medium">Neuigkeiten</span>
        </div>
      </div>
      
      {/* News grid with glassmorphism cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((news) => (
          <div key={news.artikelnr} className="group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/10 to-[var(--secondary)]/30 rounded-3xl -z-10 transform transition-transform duration-300 group-hover:scale-105"></div>
            <div className="relative backdrop-blur-sm bg-white/80 dark:bg-black/40 p-8 rounded-3xl border border-white/20 shadow-xl h-full flex flex-col">
              <div className="flex items-start mb-6">
                <div className="mr-4 bg-[var(--secondary)] text-white p-3 rounded-2xl shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                  </svg>
                </div>
                <div>
                  <span className="block text-sm text-gray-500 mb-1">Neuigkeit</span>
                  <span className="text-2xl font-bold text-[var(--secondary)]">{news.datum || "Aktuell"}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[var(--secondary)] mb-3 group-hover:text-[var(--secondary-dark)] transition-colors">
                {news.titel}
              </h3>
              
              <div className="bg-[var(--accent)] p-4 rounded-xl mb-5 italic text-gray-600 dark:text-gray-300 text-sm">
                &ldquo;{news.sample}&rdquo;
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-6 flex-grow">
                {news.text}
              </p>
              
              <Link 
                href={`/news/${news.artikelnr}`} 
                className="self-start inline-flex items-center group/link"
              >
                <span className="relative inline-block text-[var(--secondary)] font-semibold">
                  Weiterlesen
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[var(--secondary)] transform origin-left transition-transform scale-x-0 group-hover/link:scale-x-100"></span>
                </span>
                <svg className="ml-1 w-5 h-5 text-[var(--secondary)] transform transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}