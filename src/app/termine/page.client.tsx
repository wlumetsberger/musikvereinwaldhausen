"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Event } from '../services/eventsService';

interface TermineClientProps {
  initialEvents: Event[];
}

export default function TermineClient({ initialEvents }: TermineClientProps) {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [searchFilter, setSearchFilter] = useState<string>('');
  
  const filteredEvents = searchFilter.trim() !== '' 
    ? events.filter(event => 
        event.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
        event.location.toLowerCase().includes(searchFilter.toLowerCase()) ||
        event.description.toLowerCase().includes(searchFilter.toLowerCase())
      )
    : events;

  const getQueryParam = (param: string): string | null => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }
    return null;
  };

  const updateUrlWithEvent = (eventId: string | number) => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('event', eventId.toString());
      window.history.pushState({}, '', url.toString());
    }
  };

  useEffect(() => {
    const eventIdFromUrl = getQueryParam('event');
    
    if (eventIdFromUrl) {
      const selectedEventFromUrl = events.find(
        (event) => event.id.toString() === eventIdFromUrl
      );
      
      if (selectedEventFromUrl) {
        setSelectedEvent(selectedEventFromUrl);
      } else if (events.length > 0) {
        setSelectedEvent(events[0]);
      }
    } else if (events.length > 0) {
      setSelectedEvent(events[0]);
    }
  }, [events]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(e.target.value);
    if (e.target.value.trim() !== '') {
      const newFilteredEvents = events.filter(event => 
        event.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        event.location.toLowerCase().includes(e.target.value.toLowerCase()) ||
        event.description.toLowerCase().includes(e.target.value.toLowerCase())
      );
      
      if (newFilteredEvents.length > 0) {
        const selectedStillVisible = newFilteredEvents.some(event => event.id === selectedEvent?.id);
        if (!selectedStillVisible) {
          setSelectedEvent(newFilteredEvents[0]);
          updateUrlWithEvent(newFilteredEvents[0].id);
        }
      }
    } else if (events.length > 0 && !selectedEvent) {
      setSelectedEvent(events[0]);
      updateUrlWithEvent(events[0].id);
    }
  };
  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    updateUrlWithEvent(event.id);
    
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 min-h-[calc(100vh-12rem)]">
        {/* Main Event Content */}
        <div className="lg:w-2/3 flex flex-col">
          {selectedEvent ? (
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 flex-grow">
              <div className="p-8">
                <div className="py-4 border-b border-gray-200 dark:border-gray-700 mb-6">
                  <span className="inline-block px-3 py-1 bg-[var(--primary)] text-white rounded-lg text-sm">
                    Termin
                  </span>
                </div>
              
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  {selectedEvent.title}
                </h2>

                {/* Card for date and location info */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                  <div className="flex-1 items-center p-5 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/5 dark:from-[var(--primary)]/20 dark:to-[var(--primary)]/10 rounded-xl border border-[var(--primary)]/20 shadow-sm">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <h3 className="ml-2 font-bold text-lg text-[var(--primary)]">Datum</h3>
                    </div>
                    <p className="font-medium text-xl">{selectedEvent.date}</p>
                  </div>
                  
                  <div className="flex-1 items-center p-5 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/5 dark:from-[var(--primary)]/20 dark:to-[var(--primary)]/10 rounded-xl border border-[var(--primary)]/20 shadow-sm">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <h3 className="ml-2 font-bold text-lg text-[var(--primary)]">Ort</h3>
                    </div>
                    <p className="font-medium text-xl">{selectedEvent.location}</p>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-[var(--primary)] flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Details zum Termin
                  </h3>
                  <div className="prose max-w-none dark:prose-invert prose-headings:text-[var(--primary)] prose-a:text-[var(--secondary)]">
                    <p className="text-lg">{selectedEvent.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full flex-grow bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 text-gray-500 dark:text-gray-400">
              Bitte wähle einen Termin aus der Liste.
            </div>
          )}
        </div>

        {/* Event List */}
        <div className="lg:w-1/3 flex flex-col">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 border border-gray-100 dark:border-gray-700 lg:sticky lg:top-24 flex flex-col max-h-[80vh] md:max-h-[80vh] z-20 backdrop-blur-md backdrop-filter">
            <h3 className="text-xl font-bold mb-6 text-[var(--primary)] dark:text-[var(--primary-light)]">Alle Termine</h3>
            
            {/* Search Input */}
            <div className="mb-4 flex-shrink-0">
              <input 
                type="text" 
                value={searchFilter} 
                onChange={handleSearchChange} 
                placeholder="Suche nach Terminen..." 
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
              />
            </div>

            <div className="overflow-y-auto pr-2 flex-grow space-y-4 max-h-[calc(80vh-120px)] md:max-h-[calc(80vh-120px)] bg-white dark:bg-gray-800">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <div 
                    key={event.id} 
                    className={`p-4 rounded-xl cursor-pointer transition-all mb-3
                      ${selectedEvent?.id === event.id 
                        ? 'bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 border-l-4 border-[var(--primary)] shadow-md' 
                        : 'bg-white dark:bg-gray-800 hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700'}`}
                    onClick={() => handleEventClick(event)}
                  >
                    <div className={`transition-colors duration-300 ${
                      selectedEvent?.id === event.id 
                        ? 'text-[var(--primary)]' 
                        : 'text-gray-800 dark:text-white'
                    }`}>
                      <h4 className="font-bold mb-2 text-lg">
                        {event.title}
                      </h4>
                    </div>
                    <div className="flex flex-col gap-2 mt-3">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center min-w-[24px]">
                          <svg className="w-4 h-4 mr-1 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center min-w-[24px]">
                          <svg className="w-4 h-4 mr-1 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                        </div>
                        {event.location}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Keine Termine gefunden</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
