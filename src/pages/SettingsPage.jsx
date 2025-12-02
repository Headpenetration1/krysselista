import { useAuth } from '../context/AuthContext';
import { 
  User, 
  Bell, 
  Globe, 
  Shield, 
  Moon,
  ChevronRight
} from 'lucide-react';

function SettingsPage() {
  const { user } = useAuth();

  const settingsSections = [
    {
      title: 'Konto',
      items: [
        {
          icon: User,
          label: 'Profil',
          description: 'Rediger navn og kontaktinfo',
          action: () => {},
        },
        {
          icon: Shield,
          label: 'Sikkerhet',
          description: 'Passord og to-faktor autentisering',
          action: () => {},
        },
      ],
    },
    {
      title: 'Preferanser',
      items: [
        {
          icon: Bell,
          label: 'Varsler',
          description: 'Administrer varsler og påminnelser',
          action: () => {},
        },
        {
          icon: Globe,
          label: 'Språk',
          description: 'Norsk (Bokmål)',
          action: () => {},
        },
        {
          icon: Moon,
          label: 'Utseende',
          description: 'Lyst tema',
          action: () => {},
        },
      ],
    },
  ];

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-display font-bold text-neutral-800">
          Innstillinger
        </h1>
        <p className="text-neutral-500 mt-1">
          Administrer konto og preferanser
        </p>
      </div>

      {/* User Card */}
      <div className="card p-5">
        <div className="flex items-center gap-4">
          <div className="avatar avatar-lg">{user?.avatar}</div>
          <div>
            <p className="font-semibold text-neutral-800">{user?.name}</p>
            <p className="text-sm text-neutral-500">{user?.email}</p>
            <span className="badge-success mt-2 text-xs">
              {user?.role === 'staff' ? 'Ansatt' : 'Forelder'}
            </span>
          </div>
        </div>
      </div>

      {/* Settings Sections */}
      {settingsSections.map((section) => (
        <div key={section.title} className="card">
          <div className="p-4 border-b border-neutral-100">
            <h2 className="font-display font-semibold text-neutral-800">
              {section.title}
            </h2>
          </div>
          <div className="divide-y divide-neutral-100">
            {section.items.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="w-full flex items-center justify-between p-4 hover:bg-neutral-50 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-neutral-100 rounded-xl">
                    <item.icon className="w-5 h-5 text-neutral-600" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-800">{item.label}</p>
                    <p className="text-sm text-neutral-500">{item.description}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-neutral-300" />
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* App Info */}
      <div className="text-center text-sm text-neutral-400 py-4">
        <p>Krysselista v1.0.0</p>
        <p>© 2024 FrostByte AS</p>
      </div>
    </div>
  );
}

export default SettingsPage;
