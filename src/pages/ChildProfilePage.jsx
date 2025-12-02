import { useParams, Link, useNavigate } from 'react-router-dom';
import { mockChildren } from '../data/mockData';
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  User,
  Clock,
  LogIn,
  LogOut,
  Edit
} from 'lucide-react';
import { useState } from 'react';

function ChildProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [child, setChild] = useState(
    mockChildren.find(c => c.id === id)
  );

  if (!child) {
    return (
      <div className="card p-12 text-center">
        <p className="text-neutral-500">Barn ikke funnet</p>
        <Link to="/" className="btn-primary mt-4">
          Tilbake til oversikt
        </Link>
      </div>
    );
  }

  const toggleCheckIn = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('nb-NO', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });

    setChild(prev => ({
      ...prev,
      isCheckedIn: !prev.isCheckedIn,
      ...(prev.isCheckedIn 
        ? { checkedOutAt: timeString, checkedInAt: undefined }
        : { checkedInAt: timeString, checkedOutAt: undefined }
      ),
    }));
  };

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-neutral-600 hover:text-neutral-800 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Tilbake</span>
      </button>

      {/* Profile Header */}
      <div className="card p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={`avatar w-20 h-20 text-2xl ${
              child.isCheckedIn 
                ? 'bg-success-100 text-success-700'
                : 'bg-neutral-100 text-neutral-600'
            }`}>
              {child.avatar}
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-neutral-800">
                {child.name}
              </h1>
              <p className="text-neutral-500">
                {child.age} år • {child.group}
              </p>
              <div className="mt-2">
                {child.isCheckedIn ? (
                  <span className="badge-success">
                    <Clock className="w-3.5 h-3.5" />
                    Inne siden {child.checkedInAt}
                  </span>
                ) : (
                  <span className="badge-neutral">
                    Hentet {child.checkedOutAt}
                  </span>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={toggleCheckIn}
            className={child.isCheckedIn ? 'btn-danger btn-lg' : 'btn-success btn-lg'}
          >
            {child.isCheckedIn ? (
              <>
                <LogOut className="w-5 h-5" />
                Sjekk ut
              </>
            ) : (
              <>
                <LogIn className="w-5 h-5" />
                Sjekk inn
              </>
            )}
          </button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="card">
        <div className="p-4 border-b border-neutral-100 flex items-center justify-between">
          <h2 className="font-display font-semibold text-lg text-neutral-800">
            Kontaktinformasjon
          </h2>
          <button className="btn-ghost btn-sm">
            <Edit className="w-4 h-4" />
            Rediger
          </button>
        </div>

        <div className="divide-y divide-neutral-100">
          {child.parents.map(parent => (
            <div key={parent.id} className="p-5">
              <div className="flex items-start gap-4">
                <div className="avatar avatar-md bg-accent-100 text-accent-700">
                  {parent.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-neutral-800">{parent.name}</p>
                      {parent.isPrimary && (
                        <span className="badge-success text-xs">Primær</span>
                      )}
                    </div>
                    <p className="text-sm text-neutral-500">{parent.relation}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`tel:${parent.phone.replace(/\s/g, '')}`}
                      className="btn-secondary btn-sm"
                    >
                      <Phone className="w-4 h-4" />
                      {parent.phone}
                    </a>
                    <a
                      href={`mailto:${parent.email}`}
                      className="btn-secondary btn-sm"
                    >
                      <Mail className="w-4 h-4" />
                      Send e-post
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card p-4">
        <h3 className="font-medium text-neutral-700 mb-3">Hurtighandlinger</h3>
        <div className="flex flex-wrap gap-2">
          <button className="btn-secondary btn-sm">
            <User className="w-4 h-4" />
            Rediger profil
          </button>
          <button className="btn-secondary btn-sm">
            <Clock className="w-4 h-4" />
            Se historikk
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChildProfilePage;
