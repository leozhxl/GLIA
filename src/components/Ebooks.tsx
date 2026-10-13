import { ArrowRight } from 'lucide-react';
import { EBOOKS } from '@/data/ebooks';

export function Ebooks() {
  return (
    <section
      id="ebooks"
      className="section-anchor-offset bg-sand-50 px-4 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div data-reveal="zoom" className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold text-glia-900 sm:text-4xl">
            Nossos e-books
          </h2>
        </div>

        <div className="reveal-stagger mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {EBOOKS.map((ebook, i) => (
            <article
              key={i}
              data-reveal="zoom"
              className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                ebook.featured
                  ? 'shadow-lg ring-2 ring-sun-400 sm:col-span-2 sm:flex-row lg:col-span-2 xl:col-span-2'
                  : 'shadow-sm ring-1 ring-sand-200 hover:ring-coral-300/50'
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  ebook.featured
                    ? 'aspect-[2/3] bg-[#ebe8e2] sm:aspect-auto sm:w-[55%] sm:shrink-0'
                    : 'aspect-square bg-gradient-to-br from-coral-700 to-coral-900'
                }`}
              >
                {ebook.image ? (
                  <img
                    src={ebook.image}
                    alt={ebook.title}
                    loading="lazy"
                    className={`h-full w-full object-top transition-transform ${
                      'object-cover'
                    } duration-500 group-hover:scale-105`}
                  />
                ) : (
                  <div className="grid h-full place-items-center font-display text-6xl font-bold text-white/20">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                )}
                {ebook.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-coral-900 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-sun-300 shadow-lg">
                    Destaque
                  </span>
                )}
                <span
                  className={`absolute right-4 ${ebook.featured ? 'bottom-4' : 'top-4'} rounded-full bg-sun-400 px-4 py-1.5 text-sm font-extrabold text-coral-950 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  {ebook.price}
                </span>
              </div>
              <div className={`flex flex-1 flex-col p-6 ${ebook.featured ? 'sm:justify-center sm:p-8' : ''}`}>
                {ebook.featured && (
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-coral-600">
                    Kit completo · +80 materiais
                  </p>
                )}
                <h3
                  className={`font-display font-bold ${
                    ebook.featured ? 'text-2xl sm:text-3xl' : 'line-clamp-3 text-xl'
                  } leading-tight text-glia-900`}
                >
                  {ebook.title}
                </h3>
                <p className={`mt-2 text-sm ${ebook.featured ? 'sm:flex-none sm:text-base' : 'line-clamp-3 flex-1'} leading-relaxed text-glia-600`}>
                  {ebook.description}
                </p>
                <a
                  href={`#/ebook/${ebook.slug}`}
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-coral-600 px-6 py-3 text-center text-sm font-extrabold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-700"
                >
                  {ebook.featured ? 'Quero o kit' : 'Quero este e-book'}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
