import Link from 'next/link';
import { getNewsById } from '../../services/newsService';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const newsId = parseInt(params.id);
  const newsItem = await getNewsById(newsId);
  
  if (!newsItem) {
    return {
      title: 'Artikel nicht gefunden | Musikverein Waldhausen',
    };
  }
  
  return {
    title: `${newsItem.titel} | Musikverein Waldhausen`,
    description: newsItem.sample,
  };
}

export default async function NewsDetail({ params }: { params: { id: string } }) {
  const newsId = parseInt(params.id);
  const newsItem = await getNewsById(newsId);
  
  if (!newsItem) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb navigation */}
      <div className="mb-8">
        <div className="flex items-center text-sm">
          <Link href="/" className="text-[var(--primary)] hover:text-[var(--primary-dark)] hover:underline">
            Startseite
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href="/news" className="text-[var(--primary)] hover:text-[var(--primary-dark)] hover:underline">
            Neuigkeiten
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="font-medium truncate max-w-[240px]">{newsItem.titel}</span>
        </div>
      </div>
      
      <article className="bg-white rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
        <div className="h-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>
        <div className="p-8 md:p-10">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider py-1 px-3 bg-[var(--accent)] rounded-full mr-3 text-[var(--primary)]">Neuigkeit</span>
              <span className="text-sm text-gray-500">18. April 2025</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-6">{newsItem.titel}</h1>
            <div className="bg-[var(--accent)] p-4 rounded-lg italic text-gray-700 mb-8">
              {newsItem.sample}
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none leading-relaxed mb-10">
            <p>{newsItem.text}</p>
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-100 flex justify-between items-center">
            <Link 
              href="/news" 
              className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-medium group flex items-center transition-all"
            >
              <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
              <span className="ml-2">Zurück zur Übersicht</span>
            </Link>
            
            <div className="flex space-x-4">
              <a href="#" aria-label="Teilen auf Facebook" className="bg-[var(--accent)] hover:bg-gray-200 p-2 rounded-full text-[var(--primary)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" aria-label="Teilen auf Twitter" className="bg-[var(--accent)] hover:bg-gray-200 p-2 rounded-full text-[var(--primary)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" aria-label="Per E-Mail teilen" className="bg-[var(--accent)] hover:bg-gray-200 p-2 rounded-full text-[var(--primary)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}