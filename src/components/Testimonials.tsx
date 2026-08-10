import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/testimonials';

function initials(name: string) {
  return name
    .split(/[\s,e]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="section-anchor-offset relative overflow-hidden bg-coral-50/70 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-coral-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-sun-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold text-glia-900 sm:text-4xl">
            Veja o que dizem as famílias que encontraram um caminho mais tranquilo
          </h2>
          <p className="mt-4 text-pretty text-lg text-glia-800/70">
            Relatos reais de pais e mães que chegaram aqui em busca de
            respostas e encontraram alívio.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.author}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-sm ring-1 ring-glia-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-coral-900/10 hover:ring-coral-200"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-coral-400 to-sun-400 transition-transform duration-300 group-hover:scale-x-100" />

              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-coral-100 text-coral-600">
                <Quote className="h-5 w-5" />
              </div>

              <blockquote className="mt-5 flex-1 text-pretty text-base leading-relaxed text-glia-800/85">
                "{t.quote}"
              </blockquote>

              <figcaption className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-glia-100 pt-5">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-coral-400 to-coral-600 text-sm font-bold text-white">
                    {initials(t.author)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-glia-900">{t.author}</p>
                    <p className="text-sm text-glia-800/60">{t.context}</p>
                  </div>
                </div>
                <div className="flex shrink-0 gap-0.5" aria-label="Avaliação 5 de 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-sun-400 text-sun-400"
                    />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
