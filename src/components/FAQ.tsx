import { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQS } from '@/data/faqs';

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems((currentItems) =>
      currentItems.includes(index)
        ? currentItems.filter((item) => item !== index)
        : [...currentItems, index],
    );
  };

  return (
    <section id="faq" className="section-anchor-offset relative overflow-hidden bg-coral-50/70 py-16 sm:py-20">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-coral-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-sun-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-bold text-coral-700 shadow-sm ring-1 ring-coral-100">
            Central de ajuda
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold text-glia-900 sm:text-4xl">
            Perguntas que toda família faz
          </h2>
          <p className="mt-4 text-pretty text-lg text-glia-800/70">
            Reunimos as principais dúvidas para você entender cada etapa do
            cuidado com mais tranquilidade.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-4 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-4">
          {FAQS.map((item, i) => {
            const isOpen = openItems.includes(i);
            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-2xl bg-white transition-all duration-300 ${
                  isOpen
                    ? 'shadow-lg shadow-coral-900/10 ring-1 ring-coral-200'
                    : 'shadow-sm ring-1 ring-glia-100 hover:ring-coral-200'
                }`}
              >
                <button
                  id={`faq-question-${i}`}
                  type="button"
                  onClick={() => toggleItem(i)}
                  className="flex min-h-[76px] w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
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
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  aria-hidden={!isOpen}
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
