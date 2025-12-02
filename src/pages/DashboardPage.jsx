import { Link } from 'react-router-dom';
import { mockChildren, mockStats } from '../data/mockData';
import { 
  Users, 
  UserCheck, 
  UserX, 
  Clock,
  ChevronRight,
  Search
} from 'lucide-react';
import { useState } from 'react';

function StatCard({ icon: Icon, label, value, color }) {
  const colorClasses = {
    blue: 'bg-primary-50 text-primary-600',
    green: 'bg-success-50 text-success-600',
    orange: 'bg-accent-50 text-accent-600',
  };

  return (
    <div className="card p-5">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <p className="text-2xl font-bold text-neutral-800">{value}</p>
          <p className="text-sm text-neutral-500">{label}</p>
        </div>
      </div>
    </div>
  );
}

function ChildListItem({ child }) {
  return (
    <Link
      to={`/dashboard/barn/${child.id}`}
      className="card-hover flex items-center justify-between p-4 group"
    >
      <div className="flex items-center gap-4">
        <div className="avatar avatar-md">{child.avatar}</div>
        <div>
          <p className="font-medium text-neutral-800">{child.name}</p>
          <p className="text-sm text-neutral-500">{child.age} år</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {child.isCheckedIn ? (
          <div className="flex items-center gap-2">
            <span className="badge-success">
              <Clock className="w-3.5 h-3.5" />
              Inne siden {child.checkedInAt}
            </span>
          </div>
        ) : (
          <span className="badge-neutral">
            Hentet {child.checkedOutAt}
          </span>
        )}
        <ChevronRight className="w-5 h-5 text-neutral-300 group-hover:text-neutral-500 transition-colors" />
      </div>
    </Link>
  );
}

function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredChildren = mockChildren.filter(child =>
    child.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const checkedInCount = mockChildren.filter(c => c.isCheckedIn).length;
  const checkedOutCount = mockChildren.filter(c => !c.isCheckedIn).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-display font-bold text-neutral-800">
          Oversikt
        </h1>
        <p className="text-neutral-500 mt-1">
          {new Date().toLocaleDateString('nb-NO', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          icon={Users}
          label="Totalt barn"
          value={mockChildren.length}
          color="blue"
        />
        <StatCard
          icon={UserCheck}
          label="Inne nå"
          value={checkedInCount}
          color="green"
        />
        <StatCard
          icon={UserX}
          label="Hentet"
          value={checkedOutCount}
          color="orange"
        />
      </div>

      {/* Children List */}
      <div className="card">
        <div className="p-4 border-b border-neutral-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="font-display font-semibold text-lg text-neutral-800">
              Alle barn
            </h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Søk etter barn..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input py-2 pl-10 pr-4 w-full sm:w-64"
              />
            </div>
          </div>
        </div>
        
        <div className="divide-y divide-neutral-100">
          {filteredChildren.length > 0 ? (
            filteredChildren.map(child => (
              <ChildListItem key={child.id} child={child} />
            ))
          ) : (
            <div className="p-8 text-center text-neutral-500">
              Ingen barn funnet
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
