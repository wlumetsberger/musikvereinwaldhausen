"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-heading text-xl font-bold text-[var(--primary)]">
              Musikverein Waldhausen
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {[
              { name: 'Startseite', href: '/' },
              { name: 'Termine', href: '/termine' },
              { name: 'News', href: '/news' },
              { name: 'Über uns', href: '/ueber-uns' },
              { name: 'Galerie', href: '/galerie' },
              { name: 'Kontakt', href: '/kontakt' }
            ].map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="font-medium text-gray-600 hover:text-[var(--primary)] transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[var(--primary)] after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Join Us Button (Desktop) */}
          <div className="hidden md:block">
            <Link 
              href="/mitglied-werden"
              className="bg-[var(--primary)] text-white px-4 py-2 rounded-md hover:bg-[var(--primary-dark)] transition-colors font-medium text-sm"
            >
              Mitglied werden
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            type="button" 
            className="md:hidden text-gray-700 hover:text-[var(--primary)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menü öffnen</span>
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-4 space-y-1 divide-y divide-gray-100">
          {[
            { name: 'Startseite', href: '/' },
            { name: 'Termine', href: '/termine' },
            { name: 'News', href: '/news' },
            { name: 'Über uns', href: '/ueber-uns' },
            { name: 'Galerie', href: '/galerie' },
            { name: 'Kontakt', href: '/kontakt' }
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="block px-2 py-3 font-medium text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link 
              href="/mitglied-werden"
              className="block w-full text-center bg-[var(--primary)] text-white px-4 py-2 rounded-md hover:bg-[var(--primary-dark)] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Mitglied werden
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;