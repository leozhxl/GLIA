import { SPECIALTIES } from '@/data/specialties';

const PALETTE = [
  { blob: 'bg-coral-100', label: 'text-coral-600' },
  { blob: 'bg-sun-100', label: 'text-sun-700' },
  { blob: 'bg-coral-100', label: 'text-coral-700' },
  { blob: 'bg-sun-100', label: 'text-sun-600' },
];

export function Specialties() {
  return (
    <section id="especialidades" className="section-anchor-offset bg-coral-100/70 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-reveal="zoom" className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-extrabold text-glia-900 sm:text-4xl">
            Tudo o que seu filho precisa, numa só equipe
          </h2>
          <p className="mt-4 text-pretty text-lg text-glia-800/70">
            Seis especialistas que se completam. Cada uma com seu foco —
            e todas conectadas pelo mesmo plano terapêutico.
          </p>
          <p className="mt-3 font-display text-base italic text-coral-600">
            Integramos conhecimento, profissionais e família para gerar resultados reais.
          </p>
        </div>

        <div className="reveal-stagger mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SPECIALTIES.map((s, i) => {
            const c = PALETTE[i % PALETTE.length];
            return (
              <article
                key={s.name}
                data-reveal="zoom"
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-glia-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl hover:shadow-glia-950/10"
              >
                <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full ${c.blob} opacity-60 transition-transform duration-500 group-hover:scale-150`} />

                <s.icon className="relative h-9 w-9 text-coral-600" strokeWidth={1.8} />

                <h3 className="relative mt-5 text-xl font-bold text-glia-900">
                  {s.name}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-glia-800/75">
                  {s.short}
                </p>

                <div className="relative mt-4 border-t border-glia-100 pt-3">
                  <p className={`text-xs font-bold uppercase tracking-wide ${c.label}`}>
                    Quando procurar
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-glia-800/60">
                    {s.when}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <p data-reveal className="mx-auto mt-12 max-w-2xl text-center text-pretty text-base text-glia-800/60">
          Não tem certeza de qual especialidade seu filho precisa? No
          Diagnóstico Funcional, nossa equipe identifica o melhor ponto de
          partida — você não precisa decidir isso sozinho.
        </p>
      </div>
    </section>
  );
}
