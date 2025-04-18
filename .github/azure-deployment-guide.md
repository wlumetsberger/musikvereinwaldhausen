# Musikverein Website - Azure Static Web Apps Deployment Guide

Diese Anleitung beschreibt, wie Sie die Musikverein-Website auf Azure Static Web Apps bereitstellen können.

## Voraussetzungen

- Ein Azure-Konto
- Ein GitHub-Konto (für die Bereitstellung über GitHub Actions)
- Git auf Ihrem lokalen Computer installiert

## Schritte zur Bereitstellung

### 1. Repository auf GitHub erstellen

1. Loggen Sie sich in Ihr GitHub-Konto ein
2. Erstellen Sie ein neues Repository
3. Laden Sie den Quellcode dieser Website in das Repository hoch

### 2. In Azure Static Web Apps bereitstellen

1. Loggen Sie sich in das [Azure Portal](https://portal.azure.com/) ein
2. Klicken Sie auf "Ressource erstellen"
3. Suchen Sie nach "Static Web App" und wählen Sie diese aus
4. Klicken Sie auf "Erstellen"
5. Füllen Sie die Felder wie folgt aus:
   - **Abonnement**: Wählen Sie Ihr Azure-Abonnement
   - **Ressourcengruppe**: Erstellen Sie eine neue oder wählen Sie eine bestehende
   - **Name**: Wählen Sie einen Namen für Ihre Web-App (z.B. "musikverein-tradition")
   - **Region**: Wählen Sie eine Region in Ihrer Nähe (z.B. "West Europe")
   - **SKU**: Free
   - **Quelle**: GitHub
   - **GitHub-Konto**: Autorisieren Sie GitHub und wählen Sie Ihr Konto
   - **Organisation**: Wählen Sie Ihre GitHub-Organisation oder Ihr persönliches Konto
   - **Repository**: Wählen Sie das Repository mit dem Website-Code
   - **Branch**: main (oder Ihr Hauptbranch)
   - **Build-Voreinstellung**: Next.js
   - **App-Speicherort**: / (Root des Repositories)
   - **API-Speicherort**: api (oder leer lassen, wenn keine API verwendet wird)
   - **Output Location**: out (Dies ist wichtig für Next.js mit Static Export)

6. Klicken Sie auf "Überprüfen + erstellen" und dann auf "Erstellen"

Azure erstellt nun einen GitHub-Workflow in Ihrem Repository, der bei jedem Push auf den Hauptbranch automatisch die Website baut und bereitstellt.

### 3. Anpassen des Workflows (falls erforderlich)

Die automatisch generierte GitHub-Actions-Workflow-Datei (.github/workflows/azure-static-web-apps-*.yml) kann je nach Bedarf angepasst werden:

```yaml
# Beispiel einer angepassten Workflow-Datei für Next.js
name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

jobs:
  build_and_deploy_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Build And Deploy
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          app_location: "/"
          api_location: ""
          output_location: "out"
          app_build_command: "npm run build"
        env:
          NODE_VERSION: 18
```

### 4. Domain-Konfiguration (optional)

Wenn Sie eine benutzerdefinierte Domain für Ihre Website verwenden möchten:

1. Gehen Sie im Azure Portal zu Ihrer Static Web App
2. Wählen Sie "Benutzerdefinierte Domains" im linken Menü
3. Folgen Sie den Anweisungen, um Ihre Domain zu konfigurieren

## Lokale Entwicklung

Um die Website lokal zu entwickeln und zu testen:

1. Navigieren Sie zum Projektordner
2. Führen Sie `npm install` aus, um Abhängigkeiten zu installieren
3. Führen Sie `npm run dev` aus, um den Entwicklungsserver zu starten
4. Öffnen Sie `http://localhost:3000` in Ihrem Browser

## Anpassen der Website

- **News-Daten**: Um die News-Daten anzupassen, bearbeiten Sie die Datei `src/app/services/newsService.ts`
- **Termine-Daten**: Um die Termine anzupassen, bearbeiten Sie die Datei `src/app/services/eventsService.ts`
- **Farben & Design**: Die Farben sind in `src/app/globals.css` definiert und können dort angepasst werden