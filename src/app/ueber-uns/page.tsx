"use client";

import Link from 'next/link';
import Image from 'next/image';
import MemberImage from '../components/MemberImage';

type Member = {
  name: string;
  role?: string;
  filename?: string;
};

interface Section {
  name: string;
  members: Member[];
}

interface LeadershipSection {
  position: string;
  members: Member[];
}

const getColorClass = (index: number): { bg: string; text: string } => {
  const colorClasses = [
    { bg: "from-[var(--primary)]/10 to-[var(--primary)]/30", text: "text-[var(--primary)]" },
    { bg: "from-[var(--secondary)]/10 to-[var(--secondary)]/30", text: "text-[var(--secondary)]" },
  ];
  return colorClasses[index % colorClasses.length];
};

export default function UeberUnsPage() {
  const historyMilestones = [
    {
      year: "1880",
      title: "Gründung des Vereins",
      description: "Gründung des Musikvereins Waldhausen durch engagierte Bürger der Gemeinde."
    },
    {
      year: "1955",
      title: "75-jähriges Jubiläum",
      description: "Großes Festwochenende mit zahlreichen befreundeten Musikvereinen aus der Region."
    },
    {
      year: "1980",
      title: "100-jähriges Jubiläum",
      description: "Feierlichkeiten zum 100-jährigen Bestehen mit Herausgabe einer Festschrift zur Vereinsgeschichte."
    },
    {
      year: "2005",
      title: "125-jähriges Jubiläum",
      description: "Jubiläumskonzerte und Festakt im Rahmen einer Festwoche mit internationalen Gästen."
    },
    {
      year: "2020",
      title: "140 Jahre Musikverein",
      description: "Trotz der Pandemie-Situation wurde das 140-jährige Bestehen mit kleinen, angepassten Formaten gewürdigt."
    }
  ];

  const leadership: LeadershipSection[] = [
    {
      position: "Obmann",
      members: [
        { name: "Stefan Aigner", role: "Obmann", filename: "Stefan Aigner" },
        { name: "Florian Heilmann", role: "Obmann-Stellvertreter", filename: "Florian Heilmann" },
        { name: "Moritz Meindl", role: "Obmann-Stellvertreter", filename: "Moritz Meindl" }
      ]
    },
    {
      position: "Kapellmeister",
      members: [
        { name: "Manuel Schachinger", role: "Kapellmeister", filename: "Manuel Schachinger" },
        { name: "Christoph Rosenthaler", role: "Kapellmeister-Stellvertreter", filename: "Christoph Rosenthaler" }
      ]
    },
    {
      position: "Stabführer",
      members: [
        { name: "Monika Aigner", role: "Stabführer", filename: "Monika Aigner" },
        { name: "Katharina Aigner", role: "Stabführer-Stellvertreter", filename: "Katharina Aigner" },
        { name: "Matthias Reithmayer", role: "Stabführer-Stellvertreter", filename: "Matthias Reithmayer" }
      ]
    }
  ];
  
  const orchestraSections: Section[] = [
    {
        name: "MarketenderInnen",
        members: [
          { name: "Anika Achleitner" },
          { name: "Johanna Wagner"},
          { name: "Klara Berger" },
          { name: "Leni Berger" },
          { name: "Magdalena Tober" }
        ]
      },
    {
      name: "Querflöte",
      members: [
        { name: "Anna Berger" },
        { name: "Doris Grufeneder" },
        { name: "Judith Leitner" },
        { name: "Martina Wurzer" },
        { name: "Notburga Aigner" },
        { name: "Romana Fasching" },
        { name: "Sarah Grufeneder" },
        { name: "Viktoria Achleitner" },
        { name: "Viktoria Klammer" }, 
        { name: "Annalena Katzengruber" }, 
        { name: "Tamara Hinterleitner" }
      ]
    },
    {
      name: "Oboe",
      members: [
        { name: "Manuela Mutenthaler" }
      ]
    },
    {
      name: "Klarinette",
      members: [
        { name: "Barbara Schachinger" },
        { name: "Emely Wimmer" },
        { name: "Ingrid Walser" },
        { name: "Lea Schachinger" },
        { name: "Lena-Marie Berger" },
        { name: "Michaela Fink" },
        { name: "Monika Aigner" },
        { name: "Monika Kamleitner" },
        { name: "Sonja Eder" }
      ]
    },
    {
      name: "Fagott",
      members: [
        { name: "Romana Pruckmayr" }
      ]
    },
    {
      name: "Saxophon",
      members: [
        { name: "Corinna Wiesinger" },
        { name: "David Freinschlag" },
        { name: "Erhard Meindl" },
        { name: "Fritz Buchinger" },
        { name: "Gerhard Reiter" },
        { name: "Sabrina Aigner" },
        { name: "Sarah Prinz" }
      ]
    },
    {
      name: "Trompete",
      members: [
        { name: "Andreas Leonhartsberger" },
        { name: "Florian Heilmann" },
        { name: "Klemens Aigner" },
        { name: "Patrick Gruber" },
        { name: "Thaddäus Mayrhofer" },
      ]
    },
    {
      name: "Flügelhorn",
      members: [
        { name: "Josef Dieringer" },
        { name: "Josef Grünberger" },
        { name: "Josef Leonhartsberger" },
        { name: "Robert Zainzinger" },
        { name: "Stefan Aigner" },
        { name: "Wolfgang Lumetsberger" }
      ]
    },
    {
      name: "Horn",
      members: [
        { name: "Christoph Leonhartsberger" },
        { name: "Christoph Rosenthaler" },
        { name: "Philipp Hasleder" },
        { name: "Walter Aigner" }
      ]
    },
    {
      name: "Tenorhorn",
      members: [
        { name: "Bernhard Aigner" },
        { name: "Jonas Gassner" },
        { name: "Katharina Aigner" },
        { name: "Manuel Schachinger" },
        { name: "Matthias Reithmayer" },
        { name: "Maximilian Berger" },
        { name: "Nina Überlacker" },
        { name: "Simon Aigner" },
      ]
    },
    {
      name: "Posaune",
      members: [
        { name: "Andreas Schachinger" },
        { name: "Christoph Rosenthaler" },
        { name: "Elias Wimmer" },
        { name: "Matthias Leonhartsberger" },
        { name: "Thomas Meindl" }
      ]
    },
    {
      name: "Tuba",
      members: [
        { name: "Karl Grufeneder" },
        { name: "Josef Wimmer" },
        { name: "Sebastian Aigner" },
        { name: "Daniel Lumetsberger" },
        { name: "Maximilian Aigner" },
      ]
    },

    {
      name: "Schlagwerk",
      members: [
        { name: "Christian Aigner" },
        { name: "Christoph Buchinger" },
        { name: "Manuel Leonhartsberger" },
        { name: "Michael Schlager" },
        { name: "Moritz Meindl" },
        { name: "Robert Gassner" },
        { name: "Wolfgang Aigner" },
      ]
    }
  ];

  return (
    <div className="flex flex-col space-y-24">
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
                ÜBER UNS
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Musikverein Waldhausen</h1>
          
            {/* Breadcrumb navigation */}
            <div className="flex items-center text-sm">
              <Link href="/" className="text-[var(--primary)] hover:text-[var(--primary-dark)] hover:underline transition-colors">
                Startseite
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="font-medium">Über uns</span>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Milestones */}
      <section className="container mx-auto px-4" hidden={true}>
        <div className="relative">
          {/* Decorative background elements */}
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-[var(--primary)] opacity-5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[var(--secondary)] opacity-5 rounded-full blur-3xl -z-10"></div>

          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="py-1 px-3 bg-[var(--secondary)]/10 text-[var(--secondary)] rounded-full text-sm font-semibold">
                MEILENSTEINE
              </span>
            </div>
            <h2 className="text-4xl font-bold">Unsere Vereinsgeschichte</h2>
          </div>
          
          {/* Timeline layout */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-[var(--primary)]/20 transform md:translate-x-[-50%]"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {historyMilestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center md:items-start`}>
                  {/* Year bubble */}
                  <div className="absolute left-[-12px] md:left-1/2 md:transform md:translate-x-[-50%] flex items-center justify-center w-6 h-6 rounded-full bg-[var(--primary)] z-10">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pt-10 md:pt-0`}>
                    <div className="relative backdrop-blur-sm bg-white/70 dark:bg-black/40 p-6 rounded-2xl border border-white/20 shadow-lg">
                      <div className="absolute -top-8 left-0 bg-[var(--secondary)] text-white px-4 py-2 rounded-lg shadow">
                        <span className="font-bold">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[var(--primary)] mb-3 mt-2">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            {/* Decorative elements for image */}
            <div className="absolute -top-6 -right-6 h-32 w-32 bg-[var(--primary)] opacity-20 rounded-2xl -rotate-12"></div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-[var(--secondary)] opacity-20 rounded-2xl rotate-12"></div>
            <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-2xl">
              <Image 
                src="/images/cd.JPG"
                alt="Musikverein Waldhausen"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="inline-block mb-4">
              <span className="py-1 px-3 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-semibold">
                UNSERE VISION
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Tradition bewahren, Zukunft gestalten</h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
              <p>
                Der Musikverein Waldhausen sieht seine kulturelle Aufgabe im Spannungsfeld zwischen der Bewahrung traditioneller Blasmusik und der Offenheit für moderne Entwicklungen und zeitgenössische Musik.
              </p>
              <p>
                Unser Repertoire reicht von klassischen Märschen und Polkas über symphonische Blasmusik bis hin zu modernen Arrangements aktueller Pop- und Filmmusik. Diese Vielseitigkeit erlaubt es uns, ein breites Publikum anzusprechen und neue Generationen für die Blasmusik zu begeistern.
              </p>
              <p>
                Besonders am Herzen liegt uns die musikalische Ausbildung und Förderung junger Menschen. Durch unsere enge Zusammenarbeit mit lokalen Schulen und Musikschulen ermöglichen wir Kindern und Jugendlichen den Zugang zur Musik und bieten ihnen eine sinnvolle Freizeitbeschäftigung im Rahmen einer Gemeinschaft mit starken Werten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Obmann, Kapellmeister, etc. */}
      <section className="container mx-auto px-4">
        <div className="relative">
          {/* Decorative background elements */}
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-[var(--primary)] opacity-5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[var(--secondary)] opacity-5 rounded-full blur-3xl -z-10"></div>

          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="py-1 px-3 bg-[var(--secondary)]/10 text-[var(--secondary)] rounded-full text-sm font-semibold">
                FÜHRUNGSTEAM
              </span>
            </div>
            <h2 className="text-4xl font-bold">Unsere Leitung</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Diese engagierten Personen leiten den Musikverein Waldhausen und prägen maßgeblich unser Vereinsleben.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {leadership.map((section, index) => (
              <div key={section.position} className="group relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${getColorClass(index).bg} rounded-3xl -z-10 transform transition-transform duration-300 group-hover:scale-105`}></div>
                <div className="relative backdrop-blur-sm bg-white/80 dark:bg-black/40 p-8 rounded-3xl border border-white/20 shadow-xl h-full flex flex-col">
                  <h3 className={`text-2xl font-bold ${getColorClass(index).text} mb-4`}>{section.position}</h3>
                  <ul className="space-y-6">
                    {section.members.map((member) => (
                      <li key={member.name} className="flex items-center">
                        <div className="mr-4 flex-shrink-0">
                          <MemberImage 
                            name={member.name}
                            section={section.position}
                            alt={member.name}
                            size={200} // Increased size to reduce pixelation
                            quality={100} // Added higher quality setting
                          />
                        </div>
                        <div>
                          <span className="block text-lg font-semibold text-gray-700 dark:text-gray-200">{member.name}</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{member.role}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Orchestra Sections - All instrument groups */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[var(--accent)] skew-y-3 transform origin-top-right -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10 pt-12">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="py-1 px-3 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-semibold">
                REGISTER
              </span>
            </div>
            <h2 className="text-4xl font-bold">Unsere Instrumentengruppen</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Ein Blasorchester besteht aus verschiedenen Registern, die jeweils ihren eigenen charakteristischen Klang zum Gesamtbild beitragen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orchestraSections.map((section, index) => (
              section.members.length > 0 && (
                <div key={section.name} className="group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${getColorClass(index).bg} rounded-3xl -z-10 transform transition-transform duration-300 group-hover:scale-105`}></div>
                  <div className="relative backdrop-blur-sm bg-white/80 dark:bg-black/40 p-8 rounded-3xl border border-white/20 shadow-xl h-full flex flex-col">
                    <h3 className={`text-2xl font-bold ${getColorClass(index).text} mb-4`}>{section.name}</h3>
                    <ul className="grid grid-cols-1 gap-4">
                      {section.members.map((member) => (
                        <li key={member.name} className="flex items-center">
                          <div className="mr-3 flex-shrink-0">
                            <MemberImage 
                              name={member.name}
                              section={section.name}
                              alt={member.name}
                              size={60} // Increased size to reduce pixelation
                              quality={100} // Added higher quality setting
                              filename={member.filename}
                            />
                          </div>
                          <span className="text-gray-600 dark:text-gray-300">{member.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Wir sind stets auf der Suche nach musikbegeisterten Menschen jeden Alters, die Freude am gemeinsamen Musizieren haben. Egal ob Anfänger oder erfahrener Musiker – bei uns ist jeder willkommen!
            </p>
            <Link 
              href="/mitglied-werden" 
              className="inline-flex items-center bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-md"
            >
              <span>Teil unseres Orchesters werden</span>
              <svg className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
              WERDEN SIE TEIL VON UNS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Gemeinsam für die Musik</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Ob als aktives Mitglied im Orchester, als Helfer bei Veranstaltungen oder als Fördermitglied – jeder kann einen wichtigen Beitrag zu unserem Vereinsleben leisten.
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