import Image from "next/image";
import Link from "next/link";
import { getFirstFiveNews } from "./services/newsService";
import { getUpcomingEvents } from "./services/eventsService";

export default async function Home() {
  // Fetch data for our page
  const newsItems = await getFirstFiveNews(); // Now only getting the first 3 news items for the homepage
  const upcomingEvents = await getUpcomingEvents();

  // Animation style for news items
  const animationStyle = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(5px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <div className="flex flex-col space-y-32">
      <style dangerouslySetInnerHTML={{ __html: animationStyle }}></style>
      {/* Hero Section - Updated with new CD image and Against font */}
      <section className="relative overflow-visible">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-0 w-1/3 h-80 bg-[var(--primary)] opacity-10 rounded-l-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-64 bg-[var(--secondary)] opacity-10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 pt-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left content column - completely redesigned */}
            <div className="lg:w-1/2 z-10 relative">
              {/* Background blur elements */}
              <div className="absolute -z-10 -top-20 -left-20 w-64 h-64 bg-[var(--primary)]/20 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-10 right-10 w-40 h-40 bg-[var(--secondary)]/20 rounded-full blur-3xl"></div>
              
              {/* Content with layered card design */}
              <div className="relative overflow-visible">
                {/* Small floating card element */}
                <div className="absolute -top-10 right-10 bg-white/80 dark:bg-black/60 backdrop-blur-sm rounded-lg p-2 shadow-lg transform rotate-3 z-20 hidden md:block">
                  <div className="flex items-center text-[var(--secondary)]">
                    <span className="text-3xl mr-2 animate-pulse">♫</span>
                    <span className="text-sm font-medium">Seit 1880</span>
                  </div>
                </div>
                
                {/* Main content card with glassmorphism */}
                <div className="backdrop-blur-md bg-white/70 dark:bg-black/40 rounded-2xl shadow-xl p-8 border border-white/30">
                  {/* Heading with creative typography - using Against font */}
                  <div className="mb-8">
                    <h1 className="relative font-heading">
                      <span className="absolute -top-6 -left-2 text-8xl text-[var(--primary)]/10 font-black">♪</span>
                      <span className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] bg-clip-text text-transparent leading-tight">
                        Musik
                      </span>
                      <br />
                      <span className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-light text-gray-600 dark:text-gray-300 leading-tight pl-4">
                        mit
                      </span>
                      <br />
                      <span className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--secondary)] leading-tight inline-block">
                        Leidenschaft
                        <div className="h-1 w-1/2 bg-[var(--secondary)]/40 mt-2"></div>
                      </span>
                    </h1>
                  </div>
                  
                  {/* Text content with brand color accents */}
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-md">
                    Wir verbinden <span className="text-[var(--primary)] font-medium">Tradition</span> mit 
                    <span className="text-[var(--secondary)] font-medium"> Moderne</span> und schaffen musikalische
                    Erlebnisse für die ganze Gemeinde.
                  </p>
                  
                  {/* Animated call-to-action buttons with gradient borders */}
                  <div className="flex flex-wrap gap-4 relative z-30">
                    <Link 
                      href="/termine" 
                      className="relative group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] rounded-xl"></div>
                      <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-transparent transition-colors duration-300 rounded-xl px-6 py-3 text-white flex items-center shadow-md">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span className="font-medium">Unsere Termine</span>
                        <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </div>
                    </Link>
                    
                    <Link 
                      href="/hoerproben" 
                      className="relative group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary-dark)] rounded-xl"></div>
                      <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-transparent transition-colors duration-300 rounded-xl px-6 py-3 text-white flex items-center shadow-md">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                        </svg>
                        <span className="font-medium">Hörproben</span>
                        <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right image column - updated to use the CD image */}
            <div className="lg:w-1/2 relative h-[500px] w-full mt-12 lg:mt-0">
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-[var(--primary)] opacity-10 rounded-2xl rotate-3"></div>
              <div className="absolute -top-8 -left-8 w-full h-full bg-[var(--secondary)] opacity-10 rounded-2xl -rotate-3"></div>
              
              {/* Main image container - now using CD.JPG */}
              <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl">
                <Image 
                  src="/images/heading.jpg"
                  alt="Musikverein Waldhausen CD"
                  fill
                  priority
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  className="transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent"></div>
                
                {/* Image caption */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-lg font-medium drop-shadow-md">Tradition bewahren - Zukunft gestalten</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature/Stats Section with Glassmorphism */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/30 rounded-3xl -z-10 transform transition-transform duration-300 group-hover:scale-105"></div>
            <div className="relative backdrop-blur-sm bg-white/70 dark:bg-black/40 p-8 rounded-3xl border border-white/20 shadow-xl h-full flex flex-col">
              <div className="bg-[var(--primary)] h-12 w-12 flex items-center justify-center rounded-2xl mb-6 shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-3">50+ Musiker</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                Leidenschaftliche Musikerinnen und Musiker jeden Alters in unserem Hauptorchester.
              </p>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/30 rounded-3xl -z-10 transform transition-transform duration-300 group-hover:scale-105"></div>
            <div className="relative backdrop-blur-sm bg-white/70 dark:bg-black/40 p-8 rounded-3xl border border-white/20 shadow-xl h-full flex flex-col">
              <div className="bg-[var(--primary)] h-12 w-12 flex items-center justify-center rounded-2xl mb-6 shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-3">20+ Auftritte</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                Konzerte, Festivalauftritte und kulturelle Veranstaltungen jährlich.
              </p>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/30 rounded-3xl -z-10 transform transition-transform duration-300 group-hover:scale-105"></div>
            <div className="relative backdrop-blur-sm bg-white/70 dark:bg-black/40 p-8 rounded-3xl border border-white/20 shadow-xl h-full flex flex-col">
              <div className="bg-[var(--primary)] h-12 w-12 flex items-center justify-center rounded-2xl mb-6 shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-3">100+ Jahre</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                Geschichte und musikalische Tradition in unserer Gemeinde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Modernized with asymmetrical layout */}
      <section className="container mx-auto px-4">
        <div className="relative">
          {/* Decorative background elements */}
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[var(--primary)] opacity-5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-[var(--secondary)] opacity-5 rounded-full blur-3xl -z-10"></div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-5/12 relative">
              {/* Image with overlapping accent elements */}
              <div className="relative z-10">
                <div className="absolute -top-6 -right-6 h-32 w-32 bg-[var(--primary)] opacity-20 rounded-2xl -rotate-12"></div>
                <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-[var(--secondary)] opacity-20 rounded-2xl rotate-12"></div>
                <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-2xl">
                  {/* Using the CD image here too */}
                  <Image 
                    src="/images/cd.JPG"
                    alt="Musikverein Waldhausen CD"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className="transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
            
            <div className="lg:w-7/12">
              <div className="inline-block mb-4">
                <span className="py-1 px-3 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-semibold">
                  ÜBER UNS
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                <span className="block">Unser Verein -</span> 
                <span className="block mt-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">eine musikalische Gemeinschaft</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  Der Musikverein Waldhausen vereint musikalische Exzellenz mit tief verwurzelten kulturellen Werten. 
                  Seit unserer Gründung haben wir uns der Pflege traditioneller Musik und der Förderung junger Talente verschrieben.
                </p>
                <p>
                  Unsere Musikerinnen und Musiker spannen einen Bogen von traditionellen Märschen bis hin zu modernen Arrangements.
                </p>
              </div>
              
              <div className="mt-10">
                <Link 
                  href="/ueber-uns" 
                  className="relative inline-flex items-center group"
                >
                  <span className="absolute inset-0 w-full h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bottom-0 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  <span className="relative text-[var(--primary)] font-semibold text-lg group-hover:text-[var(--primary-dark)] transition-colors">Mehr über uns erfahren</span>
                  <svg className="w-5 h-5 ml-2 text-[var(--primary)] transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section - Modernized with cards */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[var(--accent)] skew-y-3 transform origin-top-right -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <div className="inline-block mb-4">
                <span className="py-1 px-3 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-semibold">
                  KALENDER
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold">Kommende Termine</h2>
            </div>
            
            <Link 
              href="/termine" 
              className="inline-flex items-center text-[var(--primary)] font-semibold mt-4 md:mt-0 group"
            >
              <span>Alle Termine</span>
              <svg className="w-5 h-5 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.slice(0, 5).map((event) => (
              <div key={event.id} className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/30 rounded-3xl -z-10 transform transition-transform duration-300 group-hover:scale-105"></div>
                <div className="relative backdrop-blur-sm bg-white/80 dark:bg-black/40 p-8 rounded-3xl border border-white/20 shadow-xl h-full flex flex-col">
                  <div className="flex items-start mb-6">
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
                  
                  <h3 className="text-xl font-bold text-[var(--secondary)] mb-3 group-hover:text-[var(--secondary-dark)] transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">{event.location}</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{event.description}</p>
                  
                  <Link 
                    href={`/termine?event=${event.id}`} 
                    className="self-start inline-flex items-center group/link"
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
            ))}
          </div>
        </div>
      </section>

      {/* News Section - Modernized with contemporary cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative">
          {/* Decorative background elements */}
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-[var(--primary)] opacity-5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[var(--secondary)] opacity-5 rounded-full blur-3xl -z-10"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <div className="inline-block mb-4">
                <span className="py-1 px-3 bg-[var(--secondary)]/10 text-[var(--secondary)] rounded-full text-sm font-semibold">
                  NEUIGKEITEN
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold">Aktuelle Neuigkeiten</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Die neuesten 3 Artikel</p>
            </div>
            
            <Link 
              href="/news" 
              className="inline-flex items-center text-[var(--primary)] font-semibold mt-4 md:mt-0 group"
            >
              <span>Alle Neuigkeiten</span>
              <svg className="w-5 h-5 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <div 
                key={news.articleId}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transform transition-transform hover:-translate-y-2 group"
                style={{
                  opacity: 0,
                  animation: 'fadeIn 0.3s forwards',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <Link href={`/news?article=${news.articleId}`} className="block h-full">
                  {news.pictureUrl && news.pictureUrl !== "" ? (
                    <div className="relative h-48 w-full">
                      <Image
                        src={news.pictureUrl.replace('../', '/')}
                        alt={news.titel}
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
                    <div className="inline-block py-1 px-3 bg-[var(--secondary)]/10 text-[var(--secondary)] rounded-full text-sm font-semibold mb-4">
                      Neuigkeit
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white line-clamp-2">
                      {news.titel}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {news.sample}
                    </p>
                    <div className="flex justify-end">
                      <span className="text-[var(--primary)] font-medium hover:underline flex items-center group-hover:text-[var(--primary-dark)]">
                        Weiterlesen
                        <svg className="ml-1 w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Modernized with gradient and layered design */}
      <section className="relative py-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-dark)] to-[var(--secondary-dark)] -z-20"></div>
        <div className="absolute top-0 left-0 right-0 h-24 bg-[var(--background)] -z-10" style={{ borderRadius: '0 0 50% 50% / 100px' }}></div>
        
        {/* Decorative shapes */}
        <div className="absolute top-1/3 left-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-white opacity-5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <span className="inline-block py-1 px-4 bg-white/20 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              WERDEN SIE MITGLIED
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Werden Sie Teil <br className="hidden md:block" />unserer Gemeinschaft</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Ob als aktives Mitglied im Orchester oder als Fördermitglied - wir freuen uns über Ihre Unterstützung!
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link 
                href="/mitglied-werden" 
                className="relative overflow-hidden group bg-white text-[var(--secondary)] px-8 py-4 rounded-xl font-bold flex items-center shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all duration-300"
              >
                <span className="absolute inset-0 w-full h-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Mitglied werden</span>
                <svg className="w-5 h-5 ml-2 relative z-10 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              <Link 
                href="/kontakt" 
                className="relative overflow-hidden group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold flex items-center hover:bg-white/10 transition-colors duration-300"
              >
                <span className="relative z-10">Kontakt aufnehmen</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
