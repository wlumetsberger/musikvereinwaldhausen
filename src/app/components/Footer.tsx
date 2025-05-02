import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden">
      {/* Decorative wave separator */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-[var(--accent)] -z-10" style={{ borderRadius: '0 0 50% 50% / 100px' }}></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[var(--primary)] opacity-5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[var(--secondary)] opacity-5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Column 1: About */}
          <div className="md:col-span-6">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent text-2xl font-bold">
                Musikverein Waldhausen
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 my-6 max-w-md">
              Seit 1880 bringen wir Musik und Kultur in unsere Gemeinde. Mit Leidenschaft, Tradition und 
              Innovation gestalten wir das kulturelle Leben in Waldhausen.
            </p>
            
            <div className="flex space-x-4 mt-6">
              {/* Social Media Icons with modern hover effects */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md hover:shadow-lg transition-all duration-300 group hover:bg-[var(--primary)]" 
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md hover:shadow-lg transition-all duration-300 group hover:bg-[var(--primary)]" 
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428.247-.66.598-1.216 1.153-1.772.554-.55 1.12-.902 1.772-1.153.637-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.333a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.17 1.17 0 100 2.34 1.17 1.17 0 000-2.34z" />
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md hover:shadow-lg transition-all duration-300 group hover:bg-[var(--primary)]" 
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors">
                  <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945-.266 1.687-1.04 1.938-2.022zM10 15.5l6-3.5-6-3.5v7z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Contact Card */}
          <div className="md:col-span-6">
            <div className="relative backdrop-blur-sm bg-white/80 dark:bg-black/40 p-8 rounded-3xl border border-white/20 shadow-xl">
              <address className="not-italic space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-[var(--primary)] text-white p-2 rounded-xl shadow-lg flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Musikhalle Waldhausen<br />
                    Musterstraße 123<br />
                    12345 Waldhausen
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="mr-4 bg-[var(--primary)] text-white p-2 rounded-xl shadow-lg flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:info@musikverein-waldhausen.de" className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] transition-colors">
                    info@musikverein-waldhausen.de
                  </a>
                </div>
                
                <div className="flex items-center">
                  <div className="mr-4 bg-[var(--primary)] text-white p-2 rounded-xl shadow-lg flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href="tel:+491234567890" className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] transition-colors">
                    +49 1234 567890
                  </a>
                </div>
              </address>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} Musikverein Waldhausen e.V. Alle Rechte vorbehalten.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/datenschutz" className="hover:text-[var(--primary)] transition-colors">Datenschutz</Link>
              <Link href="/impressum" className="hover:text-[var(--primary)] transition-colors">Impressum</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;