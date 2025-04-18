import Link from 'next/link';

export const metadata = {
  title: 'Seite nicht gefunden | Musikverein Waldhausen',
  description: 'Die gesuchte Seite konnte nicht gefunden werden.',
};

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-6">Seite nicht gefunden</h2>
        
        <div className="mb-8 text-lg">
          <p className="mb-4">
            Die gesuchte Seite existiert leider nicht oder wurde möglicherweise verschoben.
          </p>
          <p>
            Kehren Sie zur Startseite zurück oder kontaktieren Sie uns, wenn Sie Hilfe benötigen.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link 
            href="/" 
            className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold py-3 px-6 rounded-full transition-all hover:shadow-lg"
          >
            Zur Startseite
          </Link>
          <Link 
            href="/kontakt" 
            className="bg-[var(--secondary)] hover:bg-[var(--secondary-dark)] text-white font-bold py-3 px-6 rounded-full transition-all hover:shadow-lg"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </div>
  );
}