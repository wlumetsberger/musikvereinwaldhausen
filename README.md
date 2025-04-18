# Musikverein Waldhausen Website

Eine moderne Website für den Musikverein Waldhausen, mit den charakteristischen Farben Grün und Rot der Vereinstracht. Die Website bietet Informationen über den Verein, kommende Termine und aktuelle Neuigkeiten.

## Features

- Modernes, responsives Design mit traditionellen Elementen
- Ansprechendes Layout für alle Geräte (Desktop, Tablet, Smartphone)
- Sektion für kommende Veranstaltungen und Termine
- Neuigkeiten-Bereich mit Artikeln
- Einfache Erweiterbarkeit durch modularen Aufbau
- Suchmaschinenoptimiertes HTML und Metadaten
- Individuelles 404-Seite für bessere Benutzererfahrung

## Technologien

- **Next.js** - React Framework für moderne Webanwendungen
- **TypeScript** - Für typsicheren Code
- **Tailwind CSS** - Für responsive Gestaltung und anpassbares Design
- **Azure Static Web Apps** - Hosting-Plattform

## Lokale Entwicklung

Um das Projekt lokal zu entwickeln:

```bash
# Installieren der Abhängigkeiten
npm install

# Starten des Entwicklungsservers
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000) in Ihrem Browser, um die Ergebnisse zu sehen.

**Hinweis:** Für Next.js wird Node.js Version "^18.18.0 || ^19.8.0 || >= 20.0.0" benötigt. Falls Sie eine ältere Version verwenden, können Sie Node.js aktualisieren:

1. Laden Sie die neueste LTS-Version von [nodejs.org](https://nodejs.org/) herunter und installieren Sie diese, oder
2. Verwenden Sie NVM für Windows: [nvm-windows](https://github.com/coreybutler/nvm-windows) um zwischen verschiedenen Node.js-Versionen zu wechseln

## Anpassung der Website

### Farben und Design

Die Vereinsfarben Grün und Rot sowie weitere Designelemente können in `src/app/globals.css` angepasst werden:

```css
:root {
  --primary: #1e6e25; /* Grüne Farbe anpassen */
  --primary-dark: #15531c;
  --secondary: #b22222; /* Rote Farbe anpassen */
  --secondary-dark: #8b0000;
  --accent: #f5f5dc; /* Akzentfarbe anpassen */
}
```

### Schriftarten

Die Website verwendet zwei Google Fonts:
- Playfair Display für Überschriften
- Source Sans 3 für Fließtext

Diese können in `src/app/globals.css` angepasst werden.

### Inhalte

#### Neuigkeiten

Die Neuigkeiten werden über das Service-Modul `src/app/services/newsService.ts` verwaltet. Hier können Sie die Nachrichtenartikel bearbeiten oder um eine API-Integration erweitern.

#### Termine

Die Veranstaltungstermine werden über das Service-Modul `src/app/services/eventsService.ts` verwaltet. Hier können Sie die Termine bearbeiten oder um eine API-Integration erweitern.

### Komponenten

Die wichtigsten Komponenten der Website sind:

- **Header**: `src/app/components/Header.tsx` - Navigation und Logo
- **Footer**: `src/app/components/Footer.tsx` - Kontaktinformationen und Links
- **Seitenstrukturen**: Unter `src/app/` befinden sich die Hauptseiten der Website

## Deployment

Die Website ist für das Deployment auf Azure Static Web Apps konfiguriert. Eine detaillierte Anleitung für das Deployment finden Sie in der Datei `.github/azure-deployment-guide.md`.

## Bilder

Für die Verwendung eigener Bilder:

1. Platzieren Sie Ihre Bilder im `public/images`-Verzeichnis
2. Referenzieren Sie die Bilder in den Komponenten, z.B.:
   ```jsx
   <Image src="/images/ihr-bild.jpg" alt="Beschreibung" width={800} height={600} />
   ```

## Lizenz

MIT
