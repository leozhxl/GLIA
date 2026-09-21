import { EBOOKS } from '@/data/ebooks';
import { createWhatsAppLink } from '@/lib/constants';

export function EbookPage({ slug }: { slug: string }) {
  const ebook = EBOOKS.find((item) => item.slug === slug);

  if (!ebook) {
    return (
      <section className="px-4 py-32 text-center text-[#3f5636]">
        <h1 className="font-display text-4xl">Produto não encontrado</h1>
        <a href="#ebooks" className="mt-6 inline-block underline">
          Voltar aos e-books
        </a>
      </section>
    );
  }

  const links = ebook.links?.length
    ? ebook.links
    : [
        {
          label: 'Quero este e-book',
          href: createWhatsAppLink(`Olá! Quero o e-book: ${ebook.title}`),
        },
      ];

  return (
    <section className="bg-gradient-to-r from-[#f8f5f5] via-[#f3ecec] to-[#ece1e0] px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl text-[#3f5636]">
        <a href="#ebooks" className="font-sans text-base font-bold underline">
          ← Voltar aos e-books
        </a>

        <div className="mt-8 grid items-start gap-12 lg:grid-cols-2">
          <div className="group relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#3f5636]/30 to-[#e3b8b8]/40 opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#e3e9df] shadow-[0_20px_50px_rgba(63,86,54,0.25)] transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]">
              {ebook.image ? (
                <img
                  src={ebook.image}
                  alt={ebook.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : null}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/60 p-8 shadow-[0_20px_50px_rgba(63,86,54,0.15)] backdrop-blur sm:p-10">
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
              {ebook.title}
            </h1>
            <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#3f5636] to-[#e3b8b8]" />

            <p className="mt-6 inline-block rounded-full bg-[#3f5636] px-6 py-2 font-sans text-3xl font-extrabold text-white shadow-lg">
              {ebook.price}
            </p>

            <div className="mt-8 space-y-4 font-sans text-lg leading-relaxed text-[#3f5636]/90">
              {(ebook.longDescription ?? ebook.description)
                .split('\n\n')
                .map((paragraph, i) => (
                  <p key={i} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full border-2 border-[#2f3f29] bg-[#3f5636] px-8 py-4 font-sans text-lg font-extrabold uppercase text-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition duration-300 hover:scale-105 hover:shadow-[0_15px_30px_rgba(63,86,54,0.5)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/25 transition-all duration-700 group-hover/btn:left-[150%]"
                  />
                  <span className="relative">{link.label}</span>
                  <span aria-hidden="true" className="relative transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
