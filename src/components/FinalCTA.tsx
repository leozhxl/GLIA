import { Clock, MapPin, Phone } from 'lucide-react';
import { ScheduleForm } from './ScheduleForm';

export function FinalCTA() {
  return (
    <section
      id="agendar"
      className="section-anchor-offset relative overflow-hidden bg-gradient-to-br from-coral-900 via-coral-800 to-coral-900 py-20 text-white sm:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sun-600 via-sun-300 to-sun-600" />
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-10 h-80 w-80 animate-blob-morph-slow rounded-blob bg-coral-500/20 blur-2xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 animate-blob-morph rounded-blob bg-sun-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        {/* Copy side */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-sun-300">
            <Clock className="h-4 w-4" />
            O desenvolvimento não espera
          </span>

          <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.15] sm:text-4xl lg:text-5xl">
            Agende hoje a avaliação do seu filho
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-coral-50/75">
            Cada mês que passa é tempo de desenvolvimento que não volta. Quanto
            antes o cuidado começa, maior a janela de evolução. Dê o primeiro
            passo agora — estamos prontos para acolher a sua família.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-coral-50/80">
              <MapPin className="h-5 w-5 shrink-0 text-coral-300" />
              <span>R. Antônio Simão, 87 · São José, Sombrio - SC · 88960-000</span>
            </div>
            <div className="flex items-center gap-3 text-coral-50/80">
              <Phone className="h-5 w-5 shrink-0 text-coral-300" />
              <span>(48) 9634-7879 · Seg a Sex, 08h às 18h</span>
            </div>
            <div className="flex items-center gap-3 text-coral-50/80">
              <Clock className="h-5 w-5 shrink-0 text-coral-300" />
              <span>Sábados e domingos: fechado</span>
            </div>
          </div>
        </div>

        {/* Form side */}
        <div id="contato" className="section-anchor-offset">
          <ScheduleForm />
        </div>
      </div>
    </section>
  );
}
