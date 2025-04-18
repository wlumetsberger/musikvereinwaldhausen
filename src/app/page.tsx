import Image from "next/image";
import Link from "next/link";
import { getAllNews } from "./services/newsService";
import { getUpcomingEvents } from "./services/eventsService";

export default async function Home() {
  // Fetch data for our page
  const newsItems = await getAllNews();
  const upcomingEvents = await getUpcomingEvents();

  return (
    <div className="flex flex-col space-y-24 py-8">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--secondary-dark)] opacity-80">
          {/* Background texture or pattern could be added here */}
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-white p-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block">Musikverein</span>
            <span className="block">Waldhausen</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl">Tradition bewahren - Zukunft gestalten</p>
          <div className="flex flex-wrap gap-5 justify-center">
            <Link 
              href="/termine" 
              className="bg-white text-[var(--primary)] px-7 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-colors"
            >
              Unsere Termine
            </Link>
            <Link 
              href="/mitglied-werden" 
              className="bg-[var(--secondary)] text-white px-7 py-4 rounded-lg font-bold hover:bg-[var(--secondary-dark)] transition-colors"
            >
              Mitglied werden
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4">
        <div className="relative bg-white rounded-xl overflow-hidden shadow-xl">
          <div className="h-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>
          <div className="p-8 md:p-10">
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-10 pb-2 inline-block border-b-2 border-[var(--primary-dark)]">Über unseren Verein</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <p className="text-lg mb-6 leading-relaxed">
                  Der Musikverein Waldhausen vereint musikalische Exzellenz mit tief verwurzelten kulturellen Werten. 
                  Seit unserer Gründung haben wir uns der Pflege traditioneller Musik und der Förderung junger Talente verschrieben.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Unsere Musikerinnen und Musiker spannen einen Bogen von traditionellen Märschen bis hin zu modernen Arrangements.
                </p>
                <Link 
                  href="/ueber-uns" 
                  className="inline-flex items-center text-[var(--primary)] hover:text-[var(--primary-dark)] font-medium group"
                >
                  <span>Mehr über uns erfahren</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
              <div className="md:w-1/2 h-64 bg-[var(--accent)] rounded-lg">
                {/* Placeholder for an image */}
                <div className="h-full w-full flex items-center justify-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-[var(--accent)] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--primary)] mb-10 pb-2 inline-block border-b-2 border-[var(--primary-dark)]">Kommende Termine</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
                <div className="flex flex-col h-full">
                  <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white p-4 text-center">
                    <div className="text-sm uppercase tracking-wider opacity-75 mb-1">Termin</div>
                    <div className="text-2xl font-bold">{event.date}</div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[var(--secondary)] mb-3">{event.title}</h3>
                    <div className="mb-4 text-sm font-medium">
                      <p className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        {event.location}
                      </p>
                    </div>
                    <p className="mb-5 flex-grow">{event.description}</p>
                    <Link 
                      href={`/termine/${event.id}`} 
                      className="self-start inline-flex items-center text-[var(--primary)] hover:text-[var(--primary-dark)] font-medium group"
                    >
                      <span>Details</span>
                      <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link 
              href="/termine" 
              className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors inline-block"
            >
              Alle Termine anzeigen
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[var(--primary)] mb-10 pb-2 inline-block border-b-2 border-[var(--primary-dark)]">Aktuelle Neuigkeiten</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <div key={news.artikelnr} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 transform hover:-translate-y-1 flex flex-col h-full group">
              <div className="h-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>
              <div className="p-6 flex-grow">
                <span className="inline-block text-xs font-semibold text-[var(--primary)] uppercase tracking-wider mb-3 py-1 px-3 bg-[var(--accent)] rounded-full">Neuigkeit</span>
                <h3 className="text-xl font-bold text-[var(--secondary)] mb-4 group-hover:text-[var(--secondary-dark)] transition-colors">{news.titel}</h3>
                <p className="mb-4 text-sm italic text-gray-600 bg-[var(--accent)] p-3 rounded-lg">{news.sample}</p>
                <p className="mb-6 flex-grow line-clamp-3 text-gray-700">{news.text}</p>
              </div>
              <div className="px-6 pb-6 mt-auto">
                <Link 
                  href={`/news/${news.artikelnr}`} 
                  className="inline-flex items-center text-[var(--primary)] hover:text-[var(--primary-dark)] font-medium group"
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
        <div className="mt-10 text-center">
          <Link 
            href="/news" 
            className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors inline-block"
          >
            Alle Neuigkeiten anzeigen
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[var(--primary-dark)] to-[var(--secondary-dark)] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Werden Sie Teil unserer Gemeinschaft</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Ob als aktives Mitglied im Orchester oder als Fördermitglied - wir freuen uns über Ihre Unterstützung!
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Link 
                href="/mitglied-werden" 
                className="bg-white text-[var(--secondary)] px-7 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-colors"
              >
                Mitglied werden
              </Link>
              <Link 
                href="/kontakt" 
                className="bg-[var(--primary)] border-2 border-white text-white px-7 py-4 rounded-lg font-bold hover:bg-[var(--primary-dark)] transition-colors"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
