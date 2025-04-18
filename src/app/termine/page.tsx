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
      <h1 className="text-4xl font-bold text-[var(--primary)] mb-8 pb-2 border-b border-[var(--primary-dark)]">Termine</h1>
      
      {/* Breadcrumb navigation */}
      <div className="mb-8">
        <div className="flex items-center text-sm">
          <Link href="/" className="text-[var(--primary)] hover:text-[var(--primary-dark)] hover:underline">
            Startseite
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="font-medium">Termine</span>
        </div>
      </div>
      
      {/* Events list */}
      <div className="max-w-4xl mx-auto">
        {events.length === 0 ? (
          <p className="text-center py-10 bg-[var(--accent)] rounded-lg text-lg">Aktuell sind keine Termine geplant.</p>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-48 shrink-0 mb-4 md:mb-0 flex items-center justify-center bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white p-6">
                    <div className="text-center">
                      <div className="text-sm uppercase tracking-wider mb-1 opacity-80">Termin</div>
                      <div className="text-2xl font-bold">{event.date}</div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h2 className="text-2xl font-bold text-[var(--secondary)] mb-3">{event.title}</h2>
                    <p className="text-gray-600 mb-4 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      {event.location}
                    </p>
                    <p className="mb-5 text-gray-700 flex-grow">{event.description}</p>
                    <Link 
                      href={`/termine/${event.id}`} 
                      className="self-start inline-flex items-center text-[var(--primary)] hover:text-[var(--primary-dark)] font-medium"
                    >
                      Details
                      <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Additional info */}
      <div className="mt-12 bg-white p-8 rounded-xl max-w-4xl mx-auto shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold text-[var(--primary)] mb-4 pb-2 border-b border-[var(--primary-dark)] inline-block">Probenzeiten</h2>
        <div className="mt-4">
          <p className="mb-6 leading-relaxed">Regelmäßige Proben finden zu folgenden Zeiten statt:</p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-[var(--primary)] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <div>
                <span className="font-medium">Mittwoch, 19:30 - 21:30 Uhr</span>
                <p className="text-sm text-gray-600">Gesamtprobe</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-[var(--primary)] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <div>
                <span className="font-medium">Freitag, 18:00 - 19:30 Uhr</span>
                <p className="text-sm text-gray-600">Nachwuchsorchester</p>
              </div>
            </li>
          </ul>
          <p className="leading-relaxed">
            Interessierte Musikerinnen und Musiker sind herzlich eingeladen, bei unseren Proben vorbeizuschauen.
            Für weitere Informationen können Sie uns gerne <Link href="/kontakt" className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-medium hover:underline">kontaktieren</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}