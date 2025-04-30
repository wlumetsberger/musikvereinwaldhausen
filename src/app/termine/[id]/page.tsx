import Link from 'next/link';
import Image from 'next/image';
import { getEventById, getUpcomingEvents } from '../../services/eventsService';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Params = {
  id: string;
};

// Generate all possible path parameters for static export
export async function generateStaticParams() {
  const allEvents = await getUpcomingEvents();
  
  return allEvents.map((event) => ({
    id: event.id.toString(),
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Params 
}): Promise<Metadata> {
  const eventId = parseInt(params.id);
  const event = await getEventById(eventId);
  
  if (!event) {
    return {
      title: 'Termin nicht gefunden | Musikverein Waldhausen',
    };
  }
  
  return {
    title: `${event.title} | Musikverein Waldhausen`,
    description: event.description,
  };
}

export default async function EventDetail({ 
  params 
}: { 
  params: Params 
}) {
  const eventId = parseInt(params.id);
  const event = await getEventById(eventId);
  
  if (!event) {
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
          <Link href="/termine" className="text-[var(--primary)] hover:text-[var(--primary-dark)] hover:underline">
            Termine
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="font-medium truncate max-w-[240px]">{event.title}</span>
        </div>
      </div>
      
      <article className="bg-white rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
        <div className="h-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>
        
        {event.imageUrl && (
          <div className="relative h-64 md:h-80 w-full">
            <Image 
              src={event.imageUrl} 
              alt={event.title} 
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
        
        <div className="p-8 md:p-10">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider py-1 px-3 bg-[var(--accent)] rounded-full mr-3 text-[var(--primary)]">Veranstaltung</span>
              <span className="text-sm text-gray-500">{event.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-6">{event.title}</h1>
            
            <div className="mb-6 flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>{event.location}</span>
            </div>
            
            <div className="bg-[var(--accent)]/30 p-5 rounded-xl mb-8">
              <h2 className="text-lg font-semibold text-[var(--primary)] mb-2">Details zur Veranstaltung</h2>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
          
          {/* Additional event information section */}
          <div className="space-y-6 mb-10">
            <div>
              <h2 className="text-xl font-bold text-[var(--secondary)] mb-3">Programmhighlights</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Eröffnungsstück: "Festliche Ouvertüre"</li>
                <li>Klassische Werke von bekannten Komponisten</li>
                <li>Moderne Arrangements beliebter Melodien</li>
                <li>Traditionelle Märsche und Polkas</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-[var(--secondary)] mb-3">Wichtige Informationen</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[var(--primary)] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Beginn: 19:00 Uhr (Einlass ab 18:30 Uhr)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[var(--primary)] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Eintritt: €10 (Ermäßigt €5 für Schüler und Studenten)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[var(--primary)] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <span>Vorverkauf der Tickets über unsere Mitglieder oder im Gemeindeamt</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-100 flex justify-between items-center">
            <Link 
              href="/termine" 
              className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-medium group flex items-center transition-all"
            >
              <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
              <span className="ml-2">Zurück zur Terminübersicht</span>
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