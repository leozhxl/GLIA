import { EBOOKS } from '@/data/ebooks';

export function Ebooks() {
  return (
    <section
      id="ebooks"
      className="section-anchor-offset bg-gradient-to-r from-[#f8f5f5] via-[#f3ecec] to-[#ece1e0] px-4 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl text-[#3f5636]">
        <h2 data-reveal="zoom" className="text-center font-display text-4xl sm:text-5xl">
          Nossos <em className="font-bold">e-books</em>
        </h2>

        <div className="mt-14 rounded-[2.5rem] bg-white p-6 shadow-[0_20px_60px_rgba(63,86,54,0.12)] sm:p-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {EBOOKS.map((ebook, i) => (
            <article
              key={i}
              data-reveal="zoom"
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 shadow-[0_10px_30px_rgba(63,86,54,0.12)] backdrop-blur transition duration-500 hover:-translate-y-3 hover:border-[#3f5636]/30 hover:shadow-[0_25px_50px_rgba(63,86,54,0.3)]"
            >
              <div className="relative aspect-square overflow-hidden bg-[#e3e9df]">
                <div className="grid h-full place-items-center font-display text-6xl text-[#3f5636]/40">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3f5636]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute right-4 top-4 rounded-full bg-[#3f5636] px-4 py-1.5 font-sans text-sm font-extrabold text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                  {ebook.price}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="line-clamp-3 font-display text-2xl font-bold leading-tight">
                  {ebook.title}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 font-sans text-base leading-relaxed text-[#3f5636]/80">
                  {ebook.description}
                </p>
                <a
                  href={`#/ebook/${ebook.slug}`}
                  className="mt-5 flex items-center justify-center gap-2 rounded-full border-2 border-[#2f3f29] bg-[#3f5636] px-6 py-3 text-center font-sans text-sm font-extrabold uppercase text-white transition duration-300 hover:bg-[#2f3f29] hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                >
                  Quero este e-book
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
