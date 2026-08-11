import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/testimonials';
import { getInitials } from '@/lib/text';

function GoogleWordmark({ className = '' }: { className?: string }) {
  return (
    <span
      aria-label="Google"
      className={`inline-flex items-baseline font-sans text-2xl font-medium tracking-[-0.08em] ${className}`}
    >
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
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
        <div data-reveal="zoom" className="mx-auto max-w-3xl text-center">
          <div className="mx-auto inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-left shadow-sm ring-1 ring-glia-100">
            <GoogleWordmark />
            <div>
              <p className="text-sm font-bold text-glia-900">
                Avaliações no Google
              </p>
              <div className="mt-0.5 flex items-center gap-2">
                <div className="flex gap-0.5" aria-label="Avaliações 5 estrelas">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-3.5 w-3.5 fill-sun-400 text-sun-400"
                    />
                  ))}
                </div>
                <span className="text-xs font-medium text-glia-600">
                  Histórias de famílias
                </span>
              </div>
            </div>
          </div>

          <h2 className="mt-7 text-balance font-display text-3xl font-extrabold text-glia-900 sm:text-4xl">
            O cuidado que transforma também deixa boas histórias
          </h2>
          <p className="mt-4 text-pretty text-lg text-glia-800/70">
            Veja o que as famílias contam sobre a experiência de encontrar
            acolhimento, respostas e um cuidado realmente integrado.
          </p>
        </div>

        <div data-reveal className="review-marquee-mask relative mt-14 overflow-hidden">
          <div
            className="review-marquee flex w-max"
            aria-label="Carrossel de avaliações de clientes"
          >
            {[false, true].map((isDuplicate) => (
              <div
                key={isDuplicate ? 'duplicate' : 'original'}
                className="flex shrink-0 gap-6 pr-6"
                aria-hidden={isDuplicate || undefined}
              >
                {TESTIMONIALS.map((testimonial) => (
                  <figure
                    key={`${isDuplicate ? 'duplicate-' : ''}${testimonial.author}`}
                    className="group flex min-h-[290px] w-[min(34rem,calc(100vw-2rem))] shrink-0 flex-col rounded-[2rem] border border-white/80 bg-white/80 p-7 shadow-[0_18px_50px_-28px_rgba(22,61,53,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-coral-200 hover:bg-white hover:shadow-[0_24px_60px_-28px_rgba(22,61,53,0.45)] lg:p-8"
                  >
                    <figcaption className="flex items-center gap-3">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-coral-400 to-coral-700 text-sm font-bold text-white shadow-sm">
                        {getInitials(testimonial.author)}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-glia-900">
                          {testimonial.author}
                        </p>
                        <p className="truncate text-sm text-glia-800/60">
                          {testimonial.context}
                        </p>
                      </div>
                    </figcaption>

                    <blockquote className="mt-5 flex-1 text-pretty text-base leading-relaxed text-glia-800/85 sm:text-lg">
                      “{testimonial.quote}”
                    </blockquote>

                    <div
                      className="mt-6 flex gap-1 border-t border-glia-100 pt-5"
                      aria-label="Avaliação 5 de 5"
                    >
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]"
                        />
                      ))}
                    </div>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
