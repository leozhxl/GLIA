import { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQS } from '@/data/faqs';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-anchor-offset relative overflow-hidden bg-coral-50/70 py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-coral-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-sun-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold text-glia-900 sm:text-4xl">
            Perguntas que toda família faz
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl bg-white transition-all duration-300 ${
                  isOpen
                    ? 'shadow-lg shadow-coral-900/10 ring-1 ring-coral-200'
                    : 'shadow-sm ring-1 ring-glia-100 hover:ring-coral-200'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base font-bold sm:text-lg ${isOpen ? 'text-coral-700' : 'text-glia-900'}`}>
                    {item.question}
                  </span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? 'rotate-45 bg-gradient-to-br from-coral-400 to-coral-600 text-white'
                        : 'bg-coral-100 text-coral-600'
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-glia-100 px-6 pb-5 pt-4 text-pretty leading-relaxed text-glia-800/75">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
