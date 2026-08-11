import { ArrowRight, Search, FileText, Users, TrendingUp } from 'lucide-react';

const STEPS = [
  {
    icon: Search,
    title: 'Entrevista com os pais',
    text: 'Conversa detalhada para compreender a história do desenvolvimento, rotina familiar, comportamento, comunicação, alimentação, sono e principais dificuldades da criança.',
  },
  {
    icon: FileText,
    title: 'Diagnóstico Funcional da criança',
    text: 'Realizamos uma avaliação multidisciplinar utilizando protocolos específicos conforme a necessidade de cada criança.',
  },
  {
    icon: Users,
    title: 'Integração das informações',
    text: 'Nossa equipe reúne todas as observações para construir um único plano funcional, identificando prioridades e necessidades de encaminhamentos quando necessário.',
  },
  {
    icon: TrendingUp,
    title: 'Devolutiva completa',
    text: 'Os pais recebem um Diagnóstico Funcional detalhado dos resultados, além de um Plano Terapêutico Personalizado com metas e orientações práticas para casa e escola.',
  },
];

const WHAT_YOU_RECEIVE = [
  'Perfil funcional da criança',
  'Pontos fortes e potencialidades',
  'Barreiras ao desenvolvimento',
  'Gráficos de desempenho',
  'Plano terapêutico individualizado',
  'Metas para 3, 6 e 12 meses',
  'Orientações para casa',
  'Orientações para escola',
  'Encaminhamentos quando necessários',
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
            Método GLIA®
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold text-glia-900 sm:text-4xl">
            Como funciona
          </h2>
          <p className="mt-4 text-pretty text-lg text-glia-800/70">
            Nosso método exclusivo identifica as reais necessidades da criança
            e organiza um plano de intervenção baseado em prioridades
            funcionais, promovendo resultados mais eficientes e significativos
            para toda a família.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-4 lg:gap-5">
          {STEPS.map((step, i) => (
            <div key={step.title} className="group relative">
              <article className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-coral-200 hover:bg-white hover:shadow-2xl hover:shadow-coral-900/10">
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-3 font-display text-6xl font-extrabold leading-none text-coral-100/80 transition-colors duration-300 group-hover:text-coral-200"
                >
                  0{i + 1}
                </span>

                <div className="relative flex items-center justify-between">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-coral-400 to-coral-600 text-white shadow-lg shadow-coral-500/25 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <step.icon className="h-8 w-8" strokeWidth={1.8} />
                  </div>
                  <span className="rounded-full bg-coral-50 px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-wider text-coral-700">
                    Etapa {i + 1}
                  </span>
                </div>

                <h3 className="relative mt-7 text-xl font-bold text-glia-900">
                  {step.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-glia-800/70">
                  {step.text}
                </p>

              </article>

              {i < STEPS.length - 1 && (
                <ArrowRight
                  aria-hidden="true"
                  className="absolute -right-5 top-12 z-10 hidden h-10 w-10 rounded-full border border-coral-100 bg-sand-50 p-2 text-coral-500 lg:block"
                  strokeWidth={2}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-3xl bg-white/80 p-8 shadow-sm ring-1 ring-white backdrop-blur-sm sm:p-10">
          <h3 className="text-center font-display text-xl font-bold text-glia-900 sm:text-2xl">
            O que você recebe no Diagnóstico Funcional
          </h3>
          <ul className="mt-6 grid gap-x-8 gap-y-2 text-sm text-glia-800/80 sm:grid-cols-2">
            {WHAT_YOU_RECEIVE.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
