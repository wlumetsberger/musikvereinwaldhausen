import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[var(--accent)] border-t border-[var(--border-color)] mt-12">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[var(--primary)]">Musikverein Waldhausen</h3>
            <p className="text-sm mb-4 text-gray-700">
              Seit 1925 bringen wir Musik und Kultur in unsere Gemeinde. Mit Leidenschaft, Tradition und 
              Innovation gestalten wir das kulturelle Leben in Waldhausen.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--primary)] transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--primary)] transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428.247-.66.598-1.216 1.153-1.772.554-.55 1.12-.902 1.772-1.153.637-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.333a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.17 1.17 0 100 2.34 1.17 1.17 0 000-2.34z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--primary)] transition-colors" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[var(--primary)]">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-700 hover:text-[var(--primary)] transition-colors text-sm">Startseite</Link>
              <Link href="/termine" className="text-gray-700 hover:text-[var(--primary)] transition-colors text-sm">Termine</Link>
              <Link href="/news" className="text-gray-700 hover:text-[var(--primary)] transition-colors text-sm">News</Link>
              <Link href="/ueber-uns" className="text-gray-700 hover:text-[var(--primary)] transition-colors text-sm">Über uns</Link>
              <Link href="/galerie" className="text-gray-700 hover:text-[var(--primary)] transition-colors text-sm">Galerie</Link>
              <Link href="/kontakt" className="text-gray-700 hover:text-[var(--primary)] transition-colors text-sm">Kontakt</Link>
              <Link href="/datenschutz" className="text-gray-700 hover:text-[var(--primary)] transition-colors text-sm">Datenschutz</Link>
              <Link href="/impressum" className="text-gray-700 hover:text-[var(--primary)] transition-colors text-sm">Impressum</Link>
            </nav>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[var(--primary)]">Kontakt</h3>
            <address className="not-italic">
              <div className="mb-2 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-sm text-gray-700">
                  Musikhalle Waldhausen<br />
                  Musterstraße 123<br />
                  12345 Waldhausen
                </div>
              </div>
              <div className="mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--primary)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@musikverein-waldhausen.de" className="text-sm text-gray-700 hover:text-[var(--primary)] transition-colors">
                  info@musikverein-waldhausen.de
                </a>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--primary)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+491234567890" className="text-sm text-gray-700 hover:text-[var(--primary)] transition-colors">
                  +49 1234 567890
                </a>
              </div>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-[var(--border-color)] text-center text-sm text-gray-500">
          © {currentYear} Musikverein Waldhausen e.V. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;