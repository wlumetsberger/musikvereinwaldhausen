"use client";

import Link from "next/link";

export default function MitgliedWerdenPage() {
  return (
    <div className="flex flex-col space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-20 right-0 w-1/3 h-80 bg-[var(--primary)] opacity-10 rounded-l-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-64 bg-[var(--secondary)] opacity-10 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-4 py-12">
          <div className="relative mb-16">
            <div className="inline-block mb-4">
              <span className="py-1 px-3 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-semibold">
                MITGLIED WERDEN
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Mitglied werden</h1>
            <div className="flex items-center text-sm">
              <Link href="/" className="text-[var(--primary)] hover:text-[var(--primary-dark)] hover:underline transition-colors">
                Startseite
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="font-medium">Mitglied werden</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mitglied werden Info & Formular */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto bg-white/80 dark:bg-black/40 rounded-3xl shadow-2xl p-10 relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--primary)] opacity-10 rounded-full blur-2xl -z-10"></div>
          <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-[var(--secondary)] opacity-10 rounded-full blur-3xl -z-10"></div>
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-[var(--primary)]">Wir freuen uns auf Sie!</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">
              Der Musikverein Waldhausen lebt von der Unterstützung und dem Engagement seiner Mitglieder.
              Wir sind stolz auf jede neue Person, die Teil unserer Gemeinschaft werden möchte!
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              Unterstützende Mitglieder fördern unseren Verein finanziell und ideell. Mit Ihrem Beitrag helfen Sie uns, die musikalische Tradition in Waldhausen zu erhalten und weiterzuentwickeln. <br />
              <span className="font-semibold text-[var(--secondary)]">Herzlich willkommen!</span>
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Mitglied werden Formular */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--primary)]">Beitrittsformular</h3>
              <form
                className="space-y-6"
                action="mailto:office@mv-waldhausen.at"
                method="POST"
                encType="text/plain"
              >
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200">Vorname</label>
                  <input
                    type="text"
                    name="Vorname"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200">Nachname</label>
                  <input
                    type="text"
                    name="Nachname"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200">E-Mail</label>
                  <input
                    type="email"
                    name="E-Mail"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200">Telefon</label>
                  <input
                    type="tel"
                    name="Telefon"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200">Adresse</label>
                  <input
                    type="text"
                    name="Adresse"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
                  />
                </div>
                {/* Only Unterstützendes Mitglied */}
                <input type="hidden" name="Mitgliedschaft" value="Unterstützendes Mitglied" />
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200">Nachricht / Motivation</label>
                  <textarea
                    name="Nachricht"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-300"
                >
                  Mitgliedsanfrage senden
                </button>
              </form>
            </div>
            {/* Kontaktinfo */}
            <div className="flex flex-col items-start justify-center space-y-6">
              <h3 className="text-2xl font-bold text-[var(--secondary)] mb-2">Fragen?</h3>
              <div className="text-gray-700 dark:text-gray-200 text-lg space-y-2">
                <div>
                  <span className="font-semibold">Musikverein Waldhausen</span><br />
                  Markt 65<br />
                  4391 Waldhausen im Strudengau<br />
                  Österreich
                </div>
                <div>
                  <span className="font-semibold">E-Mail:</span>{" "}
                  <a
                    href="mailto:office@mv-waldhausen.at"
                    className="text-[var(--primary)] underline hover:text-[var(--secondary)] transition"
                  >
                    office@mv-waldhausen.at
                  </a>
                </div>
                <div>
                  <span className="font-semibold">Obmann:</span> Stefan Aigner
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="mailto:office@mv-waldhausen.at"
                  className="inline-flex items-center bg-[var(--secondary)] hover:bg-[var(--secondary-dark)] text-white px-6 py-2 rounded-xl font-medium shadow-md transition-all"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0l-4-4m4 4l-4 4"></path>
                  </svg>
                  E-Mail schreiben
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
                