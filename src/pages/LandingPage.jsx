import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Shield, 
  Smartphone, 
  Clock,
  Users,
  ArrowRight,
  Baby
} from 'lucide-react';

function LandingPage() {
  const features = [
    {
      icon: Clock,
      title: 'Rask inn/utsjekking',
      description: 'Kryss barn inn og ut med ett trykk. Enkelt for både foreldre og ansatte.'
    },
    {
      icon: Shield,
      title: 'Trygt og sikkert',
      description: 'GDPR-godkjent løsning med sikker lagring av all informasjon.'
    },
    {
      icon: Smartphone,
      title: 'Fungerer overalt',
      description: 'Bruk mobil, nettbrett eller PC. Alltid tilgjengelig når du trenger det.'
    },
    {
      icon: Users,
      title: 'Full oversikt',
      description: 'Se hvem som er i barnehagen, kontaktinfo og historikk på ett sted.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-8 py-4">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="font-display font-bold text-xl text-neutral-800">
              Krysselista
            </span>
          </div>
          <Link to="/login" className="btn-primary">
            Logg inn
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Baby className="w-4 h-4" />
              For barnehager
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-800 mb-6">
              Enkel og trygg{' '}
              <span className="text-primary-600">inn- og utsjekking</span>{' '}
              for barnehagen
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Erstatt det gamle Excel-arket med en moderne, sikker løsning. 
              Foreldre og ansatte får full oversikt – på sekunder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login" className="btn-primary btn-lg">
                Kom i gang
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#funksjoner" className="btn-secondary btn-lg">
                Se funksjoner
              </a>
            </div>
          </div>

          {/* Hero Image/Mockup */}
          <div className="mt-16 relative">
            <div className="bg-white rounded-3xl shadow-soft border border-neutral-200 p-4 sm:p-6 max-w-4xl mx-auto">
              <div className="bg-neutral-100 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-card">
                    <div className="text-3xl font-bold text-primary-600">12</div>
                    <div className="text-sm text-neutral-500">Barn inne</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-card">
                    <div className="text-3xl font-bold text-success-600">8</div>
                    <div className="text-sm text-neutral-500">Sjekket inn i dag</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-card">
                    <div className="text-3xl font-bold text-accent-600">4</div>
                    <div className="text-sm text-neutral-500">Hentet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funksjoner" className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
              Alt du trenger, ingenting du ikke trenger
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Designet for å være så enkelt at selv besteforeldre klarer det uten opplæring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-hover p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-display font-semibold text-xl text-neutral-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-600 rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
              Klar til å forenkle hverdagen?
            </h2>
            <p className="text-primary-100 mb-8 max-w-xl mx-auto">
              Kom i gang på minutter. Ingen installasjon, ingen komplisert oppsett.
            </p>
            <Link to="/login" className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-xl font-medium hover:bg-primary-50 transition-colors">
              Logg inn nå
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-8 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">K</span>
            </div>
            <span className="font-display font-semibold text-neutral-800">Krysselista</span>
          </div>
          <p className="text-sm text-neutral-500">
            © 2024 FrostByte AS. Alle rettigheter reservert.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
