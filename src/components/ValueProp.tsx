import { Users, MessagesSquare, ClipboardList, Baby, type LucideIcon } from 'lucide-react';

const VALUES: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Users,
    title: 'Equipe que conversa entre si',
    text: 'Nossos especialistas se reúnem em discussões de caso. Cada um sabe o que o outro está trabalhando — o cuidado nunca fica em ilhas.',
  },
  {
    icon: ClipboardList,
    title: 'Plano terapêutico único',
    text: 'Um plano integrado, construído em conjunto e revisado pela equipe. Seu filho não é uma soma de tratamentos soltos, é um todo.',
  },
  {
    icon: MessagesSquare,
    title: 'Família sempre acompanhada',
    text: 'Acompanhamos a evolução junto com você. Devolutivas claras, sem jargão, para que você entenda cada passo e participe do processo.',
  },
  {
    icon: Baby,
    title: 'Ambiente pensado para crianças',
    text: 'Espaço acolhedor, lúdico e seguro, onde seu filho se sente à vontade. Muitos chegam perguntando quando vão voltar.',
  },
];

export function ValueProp() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-coral-900 via-coral-800 to-coral-900 py-20 text-white sm:py-28">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sun-600 via-sun-300 to-sun-600" />
      {/* Decorative glow shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-10 h-72 w-72 animate-blob-morph-slow rounded-blob bg-coral-400/20 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-80 w-80 animate-blob-morph rounded-blob bg-sun-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-sun-300">
            Por que a GLIA é diferente
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold sm:text-4xl">
            Aqui, seu filho é cuidado de forma integrada
          </h2>
          <p className="mt-4 text-pretty text-lg text-coral-50/70">
            Inspirada nas células glia — que sustentam e conectam o sistema
            nervoso —, a GLIA reúne especialistas que pensam juntos o
            desenvolvimento do seu filho.
          </p>
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
