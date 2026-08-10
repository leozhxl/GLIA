import { TEAM } from '@/data/team';

function initials(name: string) {
  return name
    .replace(/^(Dra?\.)\s+/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export function Team() {
  return (
    <section
      id="equipe"
      className="section-anchor-offset relative overflow-hidden bg-gradient-to-b from-coral-900 via-coral-800 to-coral-900 py-20 sm:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sun-600 via-sun-300 to-sun-600" />
      <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-coral-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sun-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="group relative overflow-hidden rounded-3xl ring-2 ring-sun-400/70 transition-all duration-300 hover:-translate-y-1.5 hover:ring-sun-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-coral-800">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center text-4xl font-bold text-coral-300">
                    {initials(member.name)}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-coral-950 via-coral-950/25 to-transparent" />

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
                  <p className="mt-2 text-xs leading-relaxed text-coral-50/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {member.bio}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
