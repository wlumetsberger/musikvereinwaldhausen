import Link from 'next/link';
import { getUpcomingEvents } from '../services/eventsService';

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
      
      {/* Events grid with glassmorphism cards */}
      <div className="max-w-5xl mx-auto">
        {events.length === 0 ? (
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/30 rounded-3xl -z-10"></div>
            <div className="relative backdrop-blur-sm bg-white/80 dark:bg-black/40 p-8 rounded-3xl border border-white/20 shadow-xl">
              <p className="text-center py-8 text-lg text-gray-600">Aktuell sind keine Termine geplant.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {events.map((event) => (
              <div key={event.id} className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/30 rounded-3xl -z-10 transform transition-transform duration-300 group-hover:scale-105"></div>
                <div className="relative backdrop-blur-sm bg-white/80 dark:bg-black/40 p-8 rounded-3xl border border-white/20 shadow-xl h-full">
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <div className="flex items-start">
                        <div className="mr-4 bg-[var(--primary)] text-white p-3 rounded-2xl shadow-lg">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                        <div>
                          <span className="block text-sm text-gray-500 mb-1">Termin</span>
                          <span className="text-2xl font-bold text-[var(--primary)]">{event.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4 group-hover:text-[var(--secondary-dark)] transition-colors">
                        {event.title}
                      </h2>
                      
                      <div className="mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{event.location}</span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{event.description}</p>
                      
                      <Link 
                        href={`/termine/${event.id}`} 
                        className="inline-flex items-center group/link"
                      >
                        <span className="relative inline-block text-[var(--primary)] font-semibold">
                          Details
                          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[var(--primary)] transform origin-left transition-transform scale-x-0 group-hover/link:scale-x-100"></span>
                        </span>
                        <svg className="ml-1 w-5 h-5 text-[var(--primary)] transform transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
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
                <h3 className="text-xl font-bold text-[var(--primary)]">Mittwoch, 19:30 - 21:30 Uhr</h3>
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
                <h3 className="text-xl font-bold text-[var(--primary)]">Freitag, 18:00 - 19:30 Uhr</h3>
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