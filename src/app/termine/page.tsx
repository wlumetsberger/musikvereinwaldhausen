import Link from 'next/link';
import { getUpcomingEvents } from '../services/eventsService';
import TermineClient from './page.client';

export const metadata = {
  title: 'Termine | Musikverein Waldhausen',
  description: 'Kommende Auftritte und Veranstaltungen des Musikvereins Waldhausen',
};

export default async function TerminePage() {
  const events = await getUpcomingEvents();
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page header with decorative elements */}
      <div className="relative mb-16">
        {/* Background decorative elements */}
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-[var(--primary)] opacity-5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-[var(--secondary)] opacity-5 rounded-full blur-3xl -z-10"></div>
        
        <div className="inline-block mb-4">
          <span className="py-1 px-3 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-semibold">
            KALENDER
          </span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">Unsere Termine</h1>
      
        {/* Breadcrumb navigation */}
        <div className="flex items-center text-sm">
          <Link href="/" className="text-[var(--primary)] hover:text-[var(--primary-dark)] hover:underline transition-colors">
            Startseite
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="font-medium">Termine</span>
        </div>
      </div>
      
      {/* Use the client component to handle event selection */}
      <TermineClient initialEvents={events} />
      
      {/* Probenzeiten section with glassmorphism */}
      <div className="mt-24 max-w-5xl mx-auto relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-[var(--primary)] opacity-5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[var(--secondary)] opacity-5 rounded-full blur-3xl -z-10"></div>
        
        <div className="relative backdrop-blur-sm bg-white/80 dark:bg-black/40 p-8 rounded-3xl border border-white/20 shadow-xl">
          <div className="inline-block mb-6">
            <span className="py-1 px-3 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-semibold">
              PROBENZEITEN
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-8">Regelmäßige Proben</h2>
          
          <div className="mt-4 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="bg-[var(--primary)] text-white p-4 rounded-2xl shadow-lg inline-flex items-center justify-center">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--primary)]">Freitags & Sonntags</h3>
                <p className="text-gray-600 mt-1">Gesamtprobe</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="bg-[var(--primary)] text-white p-4 rounded-2xl shadow-lg inline-flex items-center justify-center">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--primary)]">Mittwochs</h3>
                <p className="text-gray-600 mt-1">Nachwuchsorchester</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-[var(--accent)] rounded-2xl">
            <p className="text-gray-700">
              Interessierte Musikerinnen und Musiker sind herzlich eingeladen, bei unseren Proben vorbeizuschauen.
              Für weitere Informationen können Sie uns gerne <Link href="/kontakt" className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-medium hover:underline transition-colors">kontaktieren</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
