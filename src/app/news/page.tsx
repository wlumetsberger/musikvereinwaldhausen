"use client";

import { useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CSSProperties } from 'react';

// Define animation styles
const fadeInAnimation: CSSProperties = {
  opacity: 0,
  animation: 'fadeIn 0.3s forwards',
};

// Define keyframes in a style tag that will be injected
const animationStyle = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
`;

// Helper function to highlight search terms in text
const highlightText = (text: string, query: string): ReactNode | string => {
  if (!query || !text) return text;
  
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  
  if (!lowerText.includes(lowerQuery)) return text;
  
  const parts = text.split(new RegExp(`(${query})`, 'i'));
  
  return (
    <>
      {parts.map((part, i) => 
        part.toLowerCase() === query.toLowerCase() ? (
          <span key={i} className="bg-yellow-200 dark:bg-yellow-800 font-medium rounded px-1">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

// Define the article type based on your JSON structure
interface NewsArticle {
  articleId: string;
  titel: string;
  sample: string;
  pictureUrl?: string;
  text: string;
}

export default function NewsPage() {
  // State for articles
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  // Function to get URL query parameters
  const getQueryParam = (param: string): string | null => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }
    return null;
  };

  // Fetch articles from a local JSON file
  useEffect(() => {
    // In a real application, you would fetch this from an API
    // For now, we'll use the data directly from the static file
    import('../../data/news.json')
      .then((data) => {
        setArticles(data.default);
        setFilteredArticles(data.default);
        
        // Check if there's an article ID in the URL query parameter
        const articleIdFromUrl = getQueryParam('article');
        
        if (articleIdFromUrl) {
          // Find the article with matching ID
          const selectedArticleFromUrl = data.default.find(
            (article: NewsArticle) => article.articleId === articleIdFromUrl
          );
          
          // If found, select it
          if (selectedArticleFromUrl) {
            setSelectedArticle(selectedArticleFromUrl);
          } else {
            // If not found, select the first article
            setSelectedArticle(data.default[0]);
          }
        } else if (data.default && data.default.length > 0) {
          // If no article ID in URL, select the first article
          setSelectedArticle(data.default[0]);
        }
        
        setLoading(false);
      })
      .catch(error => {
        console.error("Error loading news data:", error);
        setLoading(false);
      });
  }, []);

  // Function to handle search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredArticles(articles);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = articles.filter(article => 
      article.titel.toLowerCase().includes(query) || 
      article.sample.toLowerCase().includes(query) || 
      article.text.toLowerCase().includes(query)
    );
    
    setFilteredArticles(filtered);
    
    // If we have results and the current selection is not in the filtered results,
    // select the first filtered article
    if (filtered.length > 0 && 
        selectedArticle && 
        !filtered.some(article => article.articleId === selectedArticle.articleId)) {
      setSelectedArticle(filtered[0]);
    }
  }, [searchQuery, articles, selectedArticle]);
  // Function to update URL with the selected article without refreshing the page
  const updateUrlWithArticle = (articleId: string) => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('article', articleId);
      window.history.pushState({}, '', url.toString());
    }
  };
  
  // Function to handle article selection
  const handleArticleClick = (article: NewsArticle) => {
    setSelectedArticle(article);
    // Update the URL with the selected article ID
    updateUrlWithArticle(article.articleId);
    
    // Scroll to top on mobile
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Function to handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  // Function to clear search
  const clearSearch = () => {
    setSearchQuery('');
  };

  // Function to handle keyboard events for the search input
  const handleSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle escape key to clear search
    if (event.key === 'Escape') {
      clearSearch();
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[var(--primary)]"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col space-y-24">
      {/* Inject animation styles */}
      <style dangerouslySetInnerHTML={{ __html: animationStyle }} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-0 w-1/3 h-80 bg-[var(--primary)] opacity-10 rounded-l-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-64 bg-[var(--secondary)] opacity-10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 py-12">
          {/* Page header with decorative elements */}
          <div className="relative mb-16">
            <div className="inline-block mb-4">
              <span className="py-1 px-3 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-semibold">
                AKTUELLES
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Neuigkeiten</h1>
          
            {/* Breadcrumb navigation */}
            <div className="flex items-center text-sm">
              <Link href="/" className="text-[var(--primary)] hover:text-[var(--primary-dark)] hover:underline transition-colors">
                Startseite
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="font-medium">Neuigkeiten</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Article Content */}
          <div className="lg:w-2/3">
            {selectedArticle ? (
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                {selectedArticle.pictureUrl && selectedArticle.pictureUrl !== "" && (
                  <div className="relative h-[400px] w-full">
                    <Image
                      src={selectedArticle.pictureUrl.replace('../', '/')}
                      alt={selectedArticle.titel}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 66vw"
                      style={{ objectPosition: 'center', objectFit: 'contain' }}

                    />
                  </div>
                )}                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    {searchQuery ? highlightText(selectedArticle.titel, searchQuery) : selectedArticle.titel}
                  </h2>
                  {searchQuery ? (
                    <div className="prose max-w-none dark:prose-invert prose-headings:text-[var(--primary)] prose-a:text-[var(--secondary)] prose-img:rounded-xl">
                      <div 
                        dangerouslySetInnerHTML={{ 
                          __html: selectedArticle.text.replace(
                            new RegExp(`(${searchQuery})`, 'gi'),
                            '<span class="bg-yellow-200 dark:bg-yellow-800 font-medium rounded px-1">$1</span>'
                          )
                        }}
                      />
                    </div>
                  ) : (
                    <div 
                      className="prose max-w-none dark:prose-invert prose-headings:text-[var(--primary)] prose-a:text-[var(--secondary)] prose-img:rounded-xl"
                      dangerouslySetInnerHTML={{ __html: selectedArticle.text }}
                    />
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-96 text-gray-500 dark:text-gray-400">
                Bitte wähle einen Artikel aus der Liste.
              </div>
            )}
          </div>

          {/* Article List */}
          <div className="lg:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
              <h3 className="text-xl font-bold mb-6 text-[var(--primary)] dark:text-[var(--primary-light)]">Alle Artikel</h3>              {/* Search bar */}
              <div className="mb-4">
                <div className="relative">                  <input 
                    type="text" 
                    value={searchQuery} 
                    onChange={handleSearchChange}
                    onKeyDown={handleSearchKeyDown}
                    placeholder="Suche nach Artikeln..." 
                    className="w-full p-2 pl-10 pr-10 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    aria-label="Search articles"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-gray-400" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  {searchQuery && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button 
                        onClick={clearSearch}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
                        aria-label="Clear search"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
                {searchQuery && (
                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {filteredArticles.length === 0 
                      ? 'Keine Artikel gefunden' 
                      : `${filteredArticles.length} Artikel gefunden`}
                  </div>
                )}
              </div>              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((article, index) => (                    <div 
                      key={article.articleId} 
                      className={`p-4 rounded-xl cursor-pointer transition-all
                        ${selectedArticle?.articleId === article.articleId 
                          ? 'bg-[var(--primary)]/10 border-l-4 border-[var(--primary)]' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                      onClick={() => handleArticleClick(article)}
                      style={{ 
                        ...fadeInAnimation,
                        animationDelay: `${index * 0.05}s`
                      }}
                    >
                      <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">
                        {highlightText(article.titel, searchQuery)}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                        {highlightText(article.sample, searchQuery)}
                      </p>
                      {searchQuery && article.text.toLowerCase().includes(searchQuery.toLowerCase()) && (
                        <span className="inline-block mt-2 text-xs font-medium text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-1 rounded-full">
                          Im Text gefunden
                        </span>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">Keine Artikel gefunden</p>
                    <button 
                      onClick={clearSearch}
                      className="text-[var(--primary)] hover:underline focus:outline-none font-medium"
                    >
                      Suche zurücksetzen
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Featured Articles Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--accent-light)] to-[var(--accent)] dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          {searchQuery ? (
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
              {filteredArticles.length > 0 
                ? `${filteredArticles.length} Artikel gefunden zu "${searchQuery}"`
                : `Keine Artikel gefunden zu "${searchQuery}"`}
            </h2>
          ) : (
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Weitere Artikel</h2>
          )}
          
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">              {filteredArticles.slice(0, 6).map((article, index) => (
              <div 
                key={article.articleId}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transform transition-transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleArticleClick(article)}
                style={{ 
                  ...fadeInAnimation,
                  animationDelay: `${index * 0.1}s` 
                }}
              >
                {article.pictureUrl && article.pictureUrl !== "" ? (
                  <div className="relative h-48 w-full">
                    <Image
                      src={article.pictureUrl.replace('../', '/')}
                      alt={article.titel}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectPosition: 'center', objectFit: 'contain' }}
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--secondary)]/20 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Kein Bild verfügbar</span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white line-clamp-2">
                    {highlightText(article.titel, searchQuery)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {highlightText(article.sample, searchQuery)}
                  </p>
                  <div className="flex justify-end">
                    <span className="text-[var(--primary)] font-medium hover:underline">Weiterlesen</span>
                  </div>
                </div>              </div>
              ))}
            </div>
          ) : (
            searchQuery && (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-lg text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-6 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                    Keine Artikel gefunden
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Wir konnten leider keine Artikel finden, die zu deinem Suchbegriff "{searchQuery}" passen.
                  </p>
                  <button 
                    onClick={clearSearch}
                    className="px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)]"
                  >
                    Suche zurücksetzen
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}