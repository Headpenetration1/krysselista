# Henteklar 🏫

Hent barnet ditt på 1-2-3. Digital inn- og utsjekking for barnehager.

## Om prosjektet

Dette er frontend-delen av Henteklar, utviklet for FrostByte AS. Løsningen lar foreldre og ansatte sjekke barn inn/ut av barnehagen på en enkel og sikker måte.

## Tech stack

- **React** - UI-bibliotek
- **Vite** - Byggverktøy (raskere enn Create React App)
- **Tailwind CSS** - Styling
- **React Router** - Navigasjon
- **PWA** - Installerbar som app på mobil

## Kom i gang

### 1. Klon repoet
```bash
git clone https://github.com/Headpenetration1/krysselista.git
cd krysselista
```

### 2. Installer dependencies
```bash
npm install
```

### 3. Start utviklingsserver
```bash
npm run dev
```

Åpne http://localhost:5173 i nettleseren.

## Mappestruktur

```
src/
├── components/       # Gjenbrukbare komponenter
│   └── layout/       # Header, navigasjon osv.
├── context/          # React Context (auth state)
├── data/             # Mock-data for testing
├── pages/            # Alle sidene i appen
│   ├── LandingPage.jsx
│   ├── LoginPage.jsx
│   ├── DashboardPage.jsx
│   ├── CheckInOutPage.jsx
│   ├── ChildProfilePage.jsx
│   └── SettingsPage.jsx
├── App.jsx           # Hovedkomponent med routing
├── main.jsx          # Entry point
└── index.css         # Global CSS + Tailwind
```

## Sider

| Side | URL | Beskrivelse |
|------|-----|-------------|
| Landingsside | `/` | Forklarer hva appen er |
| Login | `/login` | Innlogging |
| Oversikt | `/dashboard` | Statistikk og barneliste |
| Sjekk inn/ut | `/dashboard/sjekk` | Hovedfunksjon |
| Barneprofil | `/dashboard/barn/:id` | Kontaktinfo |
| Innstillinger | `/dashboard/innstillinger` | Profil og preferanser |

## PWA (Progressive Web App)

Appen kan installeres på mobil:
- **iPhone**: Åpne i Safari → Del → "Legg til på Hjem-skjerm"
- **Android**: Åpne i Chrome → Du får popup "Installer app"

## Scripts

- `npm run dev` - Start utviklingsserver
- `npm run build` - Bygg for produksjon
- `npm run preview` - Forhåndsvis produksjonsbygg

## For UX-gruppa

Designsystemet ligger i:
- `tailwind.config.js` - Farger, fonts, spacing
- `src/index.css` - Komponentklasser (btn, card, badge osv.)

Fargepaletten:
- **Primary (mint/teal)** - Hovedfarge, knapper, lenker
- **Accent (korall/rød)** - Fra logoen, fremhevinger  
- **Success (grønn)** - "Inne", positive handlinger
- **Neutral (grå)** - Tekst, bakgrunner, borders

## TODO

- [ ] Koble til backend/database
- [ ] Implementere ekte autentisering
- [ ] Legge til flerspråklig støtte (i18n)
- [ ] Testing

---

Laget av UX-gruppa i PRO203 🚀
