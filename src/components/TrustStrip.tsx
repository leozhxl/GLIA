import { GraduationCap, MapPin, HeartHandshake } from 'lucide-react';

const STATS = [
  { icon: HeartHandshake, value: '+1000', label: 'atendimentos realizados' },
  { icon: GraduationCap, value: '6 especialidades', label: 'sob o mesmo teto' },
  { icon: MapPin, value: 'Sombrio', label: 'Santa Catarina' },
];

export function TrustStrip() {
  return (
    <div className="relative text-white" style={{ backgroundColor: '#20584c' }}>
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sun-600 via-sun-300 to-sun-600" />
      <div className="mx-auto grid max-w-7xl divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={value} className="flex flex-col items-center gap-2 px-6 py-8 text-center">
            <Icon className="h-6 w-6 text-coral-300" strokeWidth={1.75} />
            <p className="font-display text-xl font-bold">{value}</p>
            <p className="text-sm text-sand-100/70">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
