import { Users, MessagesSquare, ClipboardList, Baby, type LucideIcon } from 'lucide-react';

const ASPECTS = [
  'Comunicação',
  'Comportamento',
  'Desenvolvimento',
  'Alimentação',
  'Processamento sensorial',
  'Rotina familiar',
  'Vida escolar',
  'Participação social',
  'Autonomia',
];

const VALUES: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Users,
    title: 'Avaliação interdisciplinar integrada',
    text: 'Nossos especialistas se reúnem em discussões de caso e compartilham o mesmo raciocínio clínico — o cuidado nunca fica em ilhas.',
  },
  {
    icon: ClipboardList,
    title: 'Plano terapêutico único e personalizado',
    text: 'Em vez de pareceres separados por especialidade, construímos um único plano funcional, com metas claras e prioridades definidas.',
  },
  {
    icon: MessagesSquare,
    title: 'Comunicação constante',
    text: 'Entre profissionais, família e escola — com metas claras e acompanhamento baseado em resultados para toda a família.',
  },
  {
    icon: Baby,
    title: 'Necessidades reais da criança',
    text: 'Atendimento centrado no que realmente impacta o desenvolvimento, com equipe especializada em desenvolvimento infantil.',
  },
];

export function ValueProp() {
  return (
    <section id="sobre" className="section-anchor-offset relative overflow-hidden bg-gradient-to-br from-coral-900 via-coral-800 to-coral-900 py-20 text-white sm:py-28">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sun-600 via-sun-300 to-sun-600" />
      {/* Decorative glow shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-10 h-72 w-72 animate-blob-morph-slow rounded-blob bg-coral-400/20 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-80 w-80 animate-blob-morph rounded-blob bg-sun-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold sm:text-4xl">
            Aqui, seu filho é cuidado de forma integrada
          </h2>
          <p className="mt-4 text-pretty text-lg text-coral-50/70">
            Reunimos especialistas que pensam juntos o desenvolvimento do seu filho.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-sun-300/30 bg-white/[0.04] p-8 text-center sm:p-10">
          <h3 className="text-balance font-display text-xl font-bold sm:text-2xl">
            Reorganizar a vida da família por meio da comunicação da criança.
          </h3>
          <p className="mt-4 text-pretty text-base leading-relaxed text-coral-50/70">
            Acreditamos que desenvolver habilidades de comunicação e
            funcionalidade transforma a participação da criança em casa, na
            escola e na comunidade, promovendo mais autonomia e qualidade de
            vida para toda a família.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-3xl bg-white/[0.06] p-8 ring-1 ring-white/10 backdrop-blur-sm sm:p-10">
          <h3 className="text-balance font-display text-2xl font-extrabold sm:text-3xl">
            Muito além de um Diagnóstico
          </h3>
          <p className="mt-4 text-pretty text-base leading-relaxed text-coral-50/70 sm:text-lg">
            Enquanto muitas clínicas realizam avaliações e diagnósticos
            separados por especialidade, a GLIA integra todas as informações
            em um único plano terapêutico, considerando a criança como um
            todo e envolvendo família, escola e equipe clínica.
          </p>
          <p className="mt-6 text-sm font-bold uppercase tracking-wider text-sun-300">
            Analisamos aspectos como
          </p>
          <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm text-coral-50/80 sm:grid-cols-3">
            {ASPECTS.map((aspect) => (
              <li key={aspect} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sun-300" />
                {aspect}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="group relative overflow-hidden rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-coral-300/40"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coral-300/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-coral-400 to-coral-600 text-white shadow-lg shadow-coral-900/40">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-coral-50/70">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
