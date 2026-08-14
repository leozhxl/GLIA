import { TEAM } from '@/data/team';
import { SectionDivider } from './SectionDivider';
import { getInitials } from '@/lib/text';

export function Team() {
  return (
    <section
      id="equipe"
      className="section-anchor-offset relative overflow-hidden bg-gradient-to-b from-coral-900 via-coral-800 to-coral-900 py-20 sm:py-28"
    >
      <SectionDivider />
      <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-coral-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sun-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-reveal="zoom" className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold text-white sm:text-4xl">
            Os profissionais que olham para o seu filho de forma integrada e personalizada
          </h2>
          <p className="mt-4 text-pretty text-lg text-coral-50/70">
            Especialistas experientes, com registro ativo, que atuam como uma
            verdadeira equipe — compartilhando decisões, não apenas o mesmo
            corredor.
          </p>
          <p className="mt-3 font-display text-base italic text-sun-200">
            Não olhamos apenas para os sintomas. Investigamos como a criança
            funciona como um todo.
          </p>
        </div>

        <div className="reveal-stagger mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <article
              key={member.name}
              data-reveal="zoom"
              className="group isolate overflow-hidden rounded-3xl bg-coral-950 ring-2 ring-sun-400/70 transition-colors duration-300 hover:ring-sun-300"
            >
              <div className="relative z-10 aspect-[4/5] bg-coral-800">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    width="1023"
                    height="1537"
                    loading="lazy"
                    className="absolute inset-x-0 top-0 block h-[calc(100%+2px)] w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center text-4xl font-bold text-coral-300">
                    {getInitials(member.name)}
                  </div>
                )}
                <div className="absolute inset-x-0 top-0 h-[calc(100%+2px)] bg-gradient-to-t from-coral-950 via-coral-950/25 to-transparent" />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-2 bg-coral-950"
                />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-sun-200 backdrop-blur-sm">
                    {member.role}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold leading-relaxed text-sun-100/90">
                    {member.credential}
                  </p>
                </div>
              </div>
              <p className="relative z-20 -mt-px bg-coral-950 p-6 text-sm leading-relaxed text-coral-50/75">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
