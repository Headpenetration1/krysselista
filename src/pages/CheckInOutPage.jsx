import { useState } from 'react';
import { mockChildren } from '../data/mockData';
import { 
  LogIn, 
  LogOut, 
  Clock, 
  Check,
  Search,
  Users
} from 'lucide-react';

function CheckInOutPage() {
  const [children, setChildren] = useState(mockChildren);
  const [filter, setFilter] = useState('all'); // 'all' | 'in' | 'out'
  const [searchQuery, setSearchQuery] = useState('');
  const [recentAction, setRecentAction] = useState(null);

  const toggleCheckIn = (childId) => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('nb-NO', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });

    setChildren(prev => prev.map(child => {
      if (child.id === childId) {
        const newStatus = !child.isCheckedIn;
        setRecentAction({
          childName: child.name,
          action: newStatus ? 'inn' : 'ut',
          time: timeString,
        });
        
        // Fjern melding etter 3 sekunder
        setTimeout(() => setRecentAction(null), 3000);

        return {
          ...child,
          isCheckedIn: newStatus,
          ...(newStatus 
            ? { checkedInAt: timeString, checkedOutAt: undefined }
            : { checkedOutAt: timeString, checkedInAt: undefined }
          ),
        };
      }
      return child;
    }));
  };

  const filteredChildren = children
    .filter(child => {
      if (filter === 'in') return child.isCheckedIn;
      if (filter === 'out') return !child.isCheckedIn;
      return true;
    })
    .filter(child =>
      child.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const checkedInCount = children.filter(c => c.isCheckedIn).length;
  const checkedOutCount = children.filter(c => !c.isCheckedIn).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-display font-bold text-neutral-800">
          Sjekk inn / ut
        </h1>
        <p className="text-neutral-500 mt-1">
          Trykk på et barn for å endre status
        </p>
      </div>

      {/* Success Message */}
      {recentAction && (
        <div className="bg-success-50 border border-success-200 text-success-700 px-4 py-3 rounded-xl flex items-center gap-3 animate-pulse">
          <Check className="w-5 h-5" />
          <span>
            <strong>{recentAction.childName}</strong> ble sjekket {recentAction.action} kl. {recentAction.time}
          </span>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="card p-2 inline-flex gap-1">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === 'all'
              ? 'bg-primary-600 text-white'
              : 'text-neutral-600 hover:bg-neutral-100'
          }`}
        >
          <span className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Alle ({children.length})
          </span>
        </button>
        <button
          onClick={() => setFilter('in')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === 'in'
              ? 'bg-success-500 text-white'
              : 'text-neutral-600 hover:bg-neutral-100'
          }`}
        >
          <span className="flex items-center gap-2">
            <LogIn className="w-4 h-4" />
            Inne ({checkedInCount})
          </span>
        </button>
        <button
          onClick={() => setFilter('out')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === 'out'
              ? 'bg-neutral-600 text-white'
              : 'text-neutral-600 hover:bg-neutral-100'
          }`}
        >
          <span className="flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            Hentet ({checkedOutCount})
          </span>
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
        <input
          type="text"
          placeholder="Søk etter barn..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input pl-12"
        />
      </div>

      {/* Children Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredChildren.map(child => (
          <button
            key={child.id}
            onClick={() => toggleCheckIn(child.id)}
            className={`card p-5 text-left transition-all duration-200 hover:shadow-soft active:scale-[0.98] ${
              child.isCheckedIn
                ? 'border-success-200 bg-success-50/50'
                : 'border-neutral-200'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className={`avatar avatar-lg ${
                  child.isCheckedIn 
                    ? 'bg-success-100 text-success-700'
                    : 'bg-neutral-100 text-neutral-600'
                }`}>
                  {child.avatar}
                </div>
                <div>
                  <p className="font-semibold text-neutral-800">{child.name}</p>
                  <p className="text-sm text-neutral-500">{child.age} år • {child.group}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-neutral-400" />
                <span className="text-neutral-600">
                  {child.isCheckedIn 
                    ? `Inn: ${child.checkedInAt}` 
                    : `Hentet: ${child.checkedOutAt}`
                  }
                </span>
              </div>
              
              <div className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 ${
                child.isCheckedIn
                  ? 'bg-red-100 text-red-700'
                  : 'bg-success-100 text-success-700'
              }`}>
                {child.isCheckedIn ? (
                  <>
                    <LogOut className="w-4 h-4" />
                    Sjekk ut
                  </>
                ) : (
                  <>
                    <LogIn className="w-4 h-4" />
                    Sjekk inn
                  </>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {filteredChildren.length === 0 && (
        <div className="card p-12 text-center">
          <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-neutral-400" />
          </div>
          <p className="text-neutral-500">Ingen barn funnet</p>
        </div>
      )}
    </div>
  );
}

export default CheckInOutPage;
