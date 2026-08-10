import { Search, FileText, Users, TrendingUp } from 'lucide-react';

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
