import { Search, FileText, Users, TrendingUp } from 'lucide-react';

const STEPS = [
  {
    icon: Search,
    title: 'Avaliação inicial',
    text: 'Encontro acolhedor com o especialista da área de interesse (ou com nossa pediatra coordenadora) para entender o momento do desenvolvimento do seu filho.',
  },
  {
    icon: FileText,
    title: 'Plano terapêutico personalizado',
    text: 'A equipe discute o caso em conjunto e constrói um plano integrado, com metas claras e combinação de especialidades — sempre explicado para você.',
  },
  {
    icon: Users,
    title: 'Acompanhamento multidisciplinar',
    text: 'As sessões acontecem no mesmo lugar, com profissionais que se comunicam. O avanço de uma área alimenta o trabalho da outra.',
  },
  {
    icon: TrendingUp,
    title: 'Evolução acompanhada com a família',
    text: 'Encontros periódicos de devolutiva, em que mostramos a evolução, ajustamos metas e respondemos às suas dúvidas — sem jargão, com presença.',
  },
];

export function Process() {
  return (
    <section
      id="como-funciona"
      className="section-anchor-offset relative overflow-hidden bg-gradient-to-b from-coral-50 via-coral-50/60 to-sand-50 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-coral-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-sun-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-coral-600">
            Como funciona
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold text-glia-900 sm:text-4xl">
            Um caminho claro, do primeiro encontro à evolução
          </h2>
          <p className="mt-4 text-pretty text-lg text-glia-800/70">
            Você nunca fica sem saber o que está acontecendo. Cada etapa é
            explicada, acompanhada e ajustada junto com a família.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connecting line — desktop */}
          <div className="absolute left-0 right-0 top-9 hidden h-0.5 bg-gradient-to-r from-coral-300 via-sun-300 to-coral-300 lg:block" />

          <div className="grid gap-6 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="group relative flex flex-col items-center rounded-3xl bg-white/80 p-6 text-center shadow-sm ring-1 ring-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-xl hover:shadow-coral-900/10 lg:items-start lg:text-left"
              >
                {/* Number + icon */}
                <div className="relative z-10 flex flex-col items-center lg:items-start">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-coral-400 to-coral-600 text-white shadow-lg shadow-coral-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <step.icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <span className="mt-3 text-xs font-extrabold tracking-wide text-coral-600">
                    ETAPA {i + 1}
                  </span>
                </div>

                <h3 className="mt-2 text-xl font-bold text-glia-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-glia-800/70">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
