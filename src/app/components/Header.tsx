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
      isScrolled ? 'backdrop-blur-md shadow-lg bg-white/90 dark:bg-black/90' : 'bg-white/60 backdrop-blur-sm dark:bg-black/60'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-10">
            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="font-heading text-xl font-bold relative bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wide">
              Musikverein Waldhausen
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
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
                className="relative group px-4 py-2 font-medium text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] transition-colors rounded-lg"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 bg-[var(--primary)]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Link>
            ))}
          </nav>
          
          {/* Join Us Button (Desktop) */}
          <div className="hidden md:block">
            <Link 
              href="/mitglied-werden"
              className="relative overflow-hidden group bg-[var(--primary)] text-white px-6 py-2.5 rounded-xl font-medium text-sm shadow-lg shadow-[var(--primary)]/20 hover:shadow-xl hover:shadow-[var(--primary)]/30 transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Mitglied werden</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            type="button" 
            className="md:hidden text-gray-700 hover:text-[var(--primary)] relative z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menü öffnen</span>
            <div className="relative w-10 h-10 flex items-center justify-center">
              <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
              <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation with modern transition */}
      <div className={`fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-lg z-10 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-20`}>
        <div className="container mx-auto px-4 py-8 space-y-2 flex flex-col h-full">
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
              className="relative overflow-hidden group px-4 py-4 font-medium text-gray-700 dark:text-gray-200 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="absolute inset-0 bg-[var(--primary)]/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              <span className="relative z-10 flex items-center">
                <span className="text-xl">{item.name}</span>
                <svg className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </Link>
          ))}
          
          <div className="mt-auto pt-6">
            <Link 
              href="/mitglied-werden"
              className="block w-full relative overflow-hidden group bg-[var(--primary)] text-white px-6 py-4 rounded-xl font-bold text-center shadow-lg shadow-[var(--primary)]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center justify-center">
                Mitglied werden
                <svg className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </Link>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-[var(--primary)] opacity-5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/3 right-10 w-56 h-56 bg-[var(--secondary)] opacity-5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;