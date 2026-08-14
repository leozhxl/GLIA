import { CalendarHeart, MessageSquareText, Footprints, Stethoscope, HeartPulse } from 'lucide-react';

const SIGNS = [
  { icon: MessageSquareText, text: 'Atraso na fala ou na linguagem, ou pouco contato visual' },
  { icon: Footprints, text: 'Não responder ao ser chamado pelo nome ou dificuldade para interagir com outras crianças' },
  { icon: Stethoscope, text: 'Comportamentos repetitivos, atraso no desenvolvimento ou dificuldades escolares' },
  { icon: HeartPulse, text: 'Seletividade alimentar, alterações sensoriais ou dificuldade com mudanças na rotina' },
];

export function WhenToSeek() {
  return (
    <section className="relative overflow-hidden bg-sand-50 py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-coral-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-sun-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div data-reveal="zoom" className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold text-glia-900 sm:text-4xl">
            Quando procurar a Glia?
          </h2>
        </div>

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-2">
          <div data-reveal="left" className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-coral-200/60 to-sun-200/50 blur-xl" />
            <img
              src="/clinica-recepcao.jpg"
              alt="Ambiente acolhedor da Glia, preparado para receber a criança e a família"
              width="1200"
              height="1600"
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-2xl shadow-glia-950/10 ring-1 ring-white/60"
            />
            <div className="absolute -bottom-5 -right-5 rounded-2xl bg-white p-4 shadow-xl shadow-glia-950/10 ring-1 ring-glia-100">
              <p className="text-xs font-bold uppercase tracking-wide text-coral-600">
                Quanto antes
              </p>
              <p className="mt-0.5 text-sm font-semibold text-glia-900">
                melhor a trajetória
              </p>
            </div>
          </div>

          <div data-reveal="right">
            <p className="text-pretty text-lg leading-relaxed text-glia-700">
              Muitas famílias só percebem que algo pede atenção quando o dia a dia
              já ficou difícil. Seja por indicação da escola, do pediatra ou por
              observação em casa, buscar uma avaliação{' '}
              <strong className="font-bold text-glia-900">o mais cedo possível</strong>{' '}
              é a decisão mais segura para o desenvolvimento do seu filho.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {SIGNS.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-glia-100"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-coral-100 text-coral-600">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-glia-800">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 font-display text-base italic text-coral-600">
              Mais do que um diagnóstico, entregamos um caminho claro para o desenvolvimento.
            </p>

            <a
              href="#agendar"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-coral-500 px-7 py-4 text-base font-bold text-white shadow-lg shadow-coral-500/30 transition-all hover:bg-coral-600 active:scale-[0.98]"
            >
              <CalendarHeart className="h-5 w-5" />
              Agende Diagnóstico Funcional
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
