import {
  Wallet,
  FileStack,
  CalendarCheck,
  Stethoscope,
  Palette,
  Gift,
  Check,
  ArrowRight,
  ArrowUpRight,
  Plus,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  Infinity as InfinityIcon,
  type LucideIcon,
} from 'lucide-react';
import { createWhatsAppLink } from '@/lib/constants';
import { Ebooks } from './Ebooks';

const HOTMART_LINK =
  'https://hotmart.com/pt-br/marketplace/produtos/hagsxd-fono-na-pratica-8ncmh/F107708482E';

const DORES = [
  'O que eu preciso organizar primeiro?',
  'Como controlar meu financeiro?',
  'Quais documentos eu preciso ter?',
  'Como estruturar minha rotina?',
  'Como organizar pacientes e atendimentos?',
  'Como elaborar anamneses, relatórios e pareceres?',
];

const DESTAQUES = ['+80 materiais', '100% editável no Canva', 'Sem Canva Pro', 'Acesso vitalício'];

const MATERIAIS = [
  'Anamneses',
  'Fluxo de caixa',
  'Relatórios',
  'Pareceres',
  'Fichas de evolução',
  'Lista de presença',
  'Termos e contratos',
  'Checklists',
  'Escalas e tabelas',
  'Controle de pagamentos',
  'Planos terapêuticos',
  'Orientações às famílias',
];

const ESPECIALIDADES = ['Audição', 'Equilíbrio', 'Disfagia', 'Fala/linguagem', 'Motricidade orofacial'];

const PILARES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Wallet,
    title: 'Gestão e organização',
    body: 'Fluxo de caixa, controles financeiros, agenda, pacientes, pagamentos e rotina operacional.',
  },
  {
    icon: FileStack,
    title: 'Administrativo e burocrático',
    body: 'Modelos de documentos, cadastros, controles, termos, checklists e registros.',
  },
  {
    icon: CalendarCheck,
    title: 'Rotina profissional',
    body: 'Lista de presença, fichas de acompanhamento, organização de atendimentos e documentos de apoio.',
  },
  {
    icon: Palette,
    title: 'Personalização profissional',
    body: 'Tudo editável para você inserir sua logomarca, identidade visual e os dados do seu consultório.',
  },
];

const BONUS = [
  'Materiais de explicação para pacientes e familiares',
  'Guia rápido para gravar conteúdos profissionais',
  'Recursos essenciais para começar a atender',
];

const JORNADA = [
  { title: 'Organize seu negócio', body: 'Coloque o financeiro e a rotina em ordem antes de abrir as portas.' },
  { title: 'Estruture seus processos', body: 'Defina fluxos, controles e documentos administrativos.' },
  { title: 'Personalize seus documentos', body: 'Adicione sua logomarca e identidade visual em cada material.' },
  { title: 'Prepare sua rotina clínica', body: 'Anamneses, fichas e relatórios prontos para usar com seus pacientes.' },
  { title: 'Dê os primeiros passos', body: 'Comece a atender com mais segurança na sua trajetória profissional.' },
];

const FAQ_ITENS: { title: string; body: React.ReactNode }[] = [
  {
    title: 'Como adquirir?',
    body: (
      <>
        Clique no botão <strong>“Quero adquirir”</strong> e escolha a melhor forma de
        pagamento: <strong>R$79,90 à vista</strong> ou PIX, ou parcelado em até 10x de
        R$7,99 no cartão de crédito.
      </>
    ),
  },
  {
    title: 'O acesso é imediato?',
    body: (
      <>
        Sim. Após a compra, entre na sua conta da <strong>Hotmart</strong> com o mesmo
        e-mail utilizado no pagamento e acesse a aba <strong>“Meus produtos”</strong>. O
        Fono na Prática ficará disponível ali sempre que precisar.
      </>
    ),
  },
  {
    title: 'Tudo é editável?',
    body: (
      <>
        Sim! E você <strong>não precisa</strong> ter <strong>Canva Pro</strong> nem dominar
        o Canva, apenas colocar a sua logo e os dados. Simples e prático.
      </>
    ),
  },
  {
    title: 'É apenas para fonos formadas?',
    body: (
      <>
        Não. O material foi pensado também para estudantes que querem se preparar melhor
        para iniciar os atendimentos com mais organização e segurança, e para
        recém-formadas que estão começando a estruturar o próprio negócio.
      </>
    ),
  },
  {
    title: 'Atende só uma especialidade?',
    body: (
      <>
        Não! É uma base pensada para organizar sua prática clínica em{' '}
        <strong>diferentes áreas</strong>, como audição, equilíbrio, disfagia,
        fala/linguagem e motricidade orofacial.
      </>
    ),
  },
  {
    title: 'O acesso é vitalício?',
    body: (
      <>
        Sim! Após a compra você terá acesso ao Fono na Prática de forma vitalícia, mesmo
        quando houver atualizações.
      </>
    ),
  },
];

function HotmartButton({
  children,
  variant = 'dark',
}: {
  children: React.ReactNode;
  variant?: 'dark' | 'gold';
}) {
  const styles =
    variant === 'gold'
      ? 'bg-sun-400 text-coral-950 hover:bg-sun-300 shadow-sun-900/20'
      : 'bg-glia-900 text-white hover:bg-coral-800 shadow-glia-900/20';
  return (
    <a
      href={HOTMART_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 rounded-full py-2 pl-7 pr-2 text-sm font-bold shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl ${styles}`}
    >
      {children}
      <span
        className={`grid h-10 w-10 place-items-center rounded-full transition-transform group-hover:rotate-45 ${
          variant === 'gold' ? 'bg-coral-950 text-sun-300' : 'bg-sun-400 text-coral-950'
        }`}
      >
        <ArrowUpRight className="h-5 w-5" />
      </span>
    </a>
  );
}

/** Pilha ilustrativa de documentos do kit, montada só com CSS. */
function DocStack() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-[22rem] w-full max-w-sm sm:h-[26rem]">
      {/* Documento de fundo: fluxo de caixa */}
      <div className="absolute left-0 top-8 w-56 -rotate-[8deg] rounded-2xl bg-white p-5 shadow-xl ring-1 ring-sand-200 sm:w-64">
        <p className="text-[10px] font-bold uppercase tracking-widest text-coral-600">Fluxo de caixa</p>
        <div className="mt-4 flex h-20 items-end gap-1.5">
          {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-coral-200" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="h-1.5 w-full rounded bg-sand-200" />
          <div className="h-1.5 w-2/3 rounded bg-sand-200" />
        </div>
      </div>

      {/* Documento do meio: relatório */}
      <div className="absolute right-0 top-0 w-52 rotate-[6deg] rounded-2xl bg-coral-900 p-5 text-white shadow-xl sm:w-60">
        <p className="text-[10px] font-bold uppercase tracking-widest text-sun-300">Relatório</p>
        <div className="mt-4 space-y-2">
          {[100, 85, 92, 60, 78].map((w, i) => (
            <div key={i} className="h-1.5 rounded bg-white/25" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-sun-400" />
          <div className="h-1.5 w-20 rounded bg-white/25" />
        </div>
      </div>

      {/* Documento da frente: anamnese */}
      <div className="absolute bottom-0 left-1/2 w-64 -translate-x-1/2 rotate-[-1deg] rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-sand-200 sm:w-72">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold uppercase tracking-widest text-coral-600">Anamnese</p>
          <span className="rounded-full bg-sun-100 px-2 py-0.5 text-[9px] font-bold uppercase text-sun-800">
            Sua logo
          </span>
        </div>
        <div className="mt-4 space-y-3">
          {['Nome', 'Queixa', 'Histórico'].map((label) => (
            <div key={label}>
              <p className="text-[10px] font-semibold text-glia-400">{label}</p>
              <div className="mt-1 h-px w-full bg-sand-300" />
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {['Sim', 'Não'].map((opt) => (
            <span key={opt} className="flex items-center gap-1.5 text-[10px] text-glia-500">
              <span className="h-3 w-3 rounded-sm border border-coral-400" />
              {opt}
            </span>
          ))}
        </div>
      </div>

      {/* Selo de preço */}
      <div className="absolute -right-2 bottom-16 grid h-24 w-24 rotate-12 place-items-center rounded-full bg-sun-400 text-center text-coral-950 shadow-lg sm:right-0">
        <div>
          <p className="text-[10px] font-bold uppercase leading-none">Só</p>
          <p className="font-display text-xl font-extrabold leading-tight">R$79,90</p>
          <p className="text-[9px] font-semibold leading-none">no PIX</p>
        </div>
      </div>
    </div>
  );
}

export function KitFono() {
  return (
    <section id="kit-fono" className="section-anchor-offset relative overflow-hidden">
      {/* 1. Hero — claro, editorial, com pilha de documentos */}
      <div className="relative overflow-hidden bg-sand-100 px-4 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(theme(colors.sand.300)_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div data-reveal="left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-coral-800 shadow-sm ring-1 ring-sand-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sun-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sun-500" />
              </span>
              Preço especial para os primeiros 50 compradores
            </span>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-coral-600">Fono na Prática</p>
            <h1 className="mt-3 text-balance font-display text-5xl font-extrabold leading-[0.95] text-glia-900 sm:text-6xl lg:text-7xl">
              Me formei.{' '}
              <span className="relative inline-block italic text-coral-700">
                E agora?
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-sun-400"
                >
                  <path d="M2 9 C 50 2, 150 2, 198 8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-glia-600">
              Da primeira ideia à porta aberta do seu próprio negócio. Materiais
              profissionais e administrativos para você organizar, estruturar e abrir seu
              consultório com mais segurança.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {DESTAQUES.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 rounded-full border border-coral-200 bg-coral-50 px-3.5 py-1.5 text-sm font-medium text-coral-800"
                >
                  <Check className="h-3.5 w-3.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <HotmartButton>Quero começar meu negócio</HotmartButton>
              <p className="text-sm text-glia-500">
                <s className="text-glia-400">R$97,00</s>{' '}
                <strong className="text-glia-900">10x R$7,99</strong> ou R$79,90 à vista
              </p>
            </div>
          </div>

          <div data-reveal="right">
            <DocStack />
          </div>
        </div>
      </div>

      {/* 2. Identificação — dúvidas em formato de conversa */}
      <div className="bg-white px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
          <div data-reveal="left" className="lg:sticky lg:top-32">
            <h2 className="text-balance font-display text-4xl font-extrabold leading-tight text-glia-900 sm:text-5xl">
              Você se formou e não sabe por onde começar?
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-glia-600">
              Anotações desorganizadas, medo de esquecer informações na avaliação e
              insegurança para montar documentos do zero não precisam mais fazer parte da
              sua rotina.
            </p>
          </div>

          <div className="rounded-[2rem] bg-sand-100 p-5 sm:p-8">
            <div className="reveal-stagger space-y-3">
              {DORES.map((item, i) => (
                <div
                  key={item}
                  data-reveal={i % 2 === 0 ? 'left' : 'right'}
                  className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <p
                    className={`max-w-[85%] rounded-2xl px-5 py-3 text-base leading-snug shadow-sm ${
                      i % 2 === 0
                        ? 'rounded-bl-md bg-white text-glia-800'
                        : 'rounded-br-md bg-coral-100 text-coral-900'
                    }`}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div data-reveal className="mt-6 flex items-end gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sun-400 text-coral-950">
                <Sparkles className="h-4 w-4" />
              </span>
              <p className="rounded-2xl rounded-bl-md bg-glia-900 px-5 py-3 text-base font-medium text-white shadow-md">
                Calma. Tem resposta pra tudo isso no <span className="text-sun-300">Fono na Prática</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Virada — manifesto + faixa de materiais */}
      <div className="relative overflow-hidden bg-glia-950 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <p data-reveal className="font-display text-3xl font-bold leading-tight text-glia-400 sm:text-5xl">
            A faculdade prepara você para ser fono.
          </p>
          <p data-reveal className="mt-3 text-balance font-display text-3xl font-extrabold italic leading-tight text-white sm:text-5xl">
            Mas quem prepara você para <span className="text-sun-400">abrir um negócio?</span>
          </p>
          <div data-reveal className="mt-10 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-[auto_1fr] sm:gap-10">
            <p className="font-display text-6xl font-extrabold leading-none text-coral-400 sm:text-7xl">+80</p>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-glia-300">
              Existe uma empresa por trás de todo consultório. O{' '}
              <strong className="text-white">Fono na Prática</strong> é a base completa
              para você sair do zero e chegar à prática profissional: materiais totalmente
              editáveis no Canva, elaborados com apoio de especialistas e organizados
              conforme as diretrizes do Conselho Federal de Fonoaudiologia.
            </p>
          </div>
        </div>

        <div aria-hidden="true" className="review-marquee-mask mt-16 overflow-hidden">
          <div className="review-marquee flex w-max gap-3" style={{ animationDuration: '45s' }}>
            {[...MATERIAIS, ...MATERIAIS].map((item, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-glia-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Pilares — bento grid */}
      <div className="bg-sand-50 px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="max-w-xl text-balance font-display text-4xl font-extrabold leading-tight text-glia-900 sm:text-5xl">
              Tudo que você precisa, em 5 pilares
            </h2>
            <p className="max-w-sm text-pretty text-base text-glia-600">
              Em vez de começar do zero, em frente a uma folha em branco, você recebe
              modelos prontos para cada etapa.
            </p>
          </div>

          <div className="reveal-stagger mt-12 grid auto-rows-fr gap-4 md:grid-cols-4">
            {/* Pilar principal: prática clínica */}
            <div
              data-reveal="zoom"
              className="relative overflow-hidden rounded-[2rem] bg-coral-800 p-8 text-white md:col-span-2 md:row-span-2"
            >
              <div aria-hidden="true" className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-coral-600/50 blur-2xl" />
              <div className="relative flex h-full flex-col">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-sun-400 text-coral-950">
                  <Stethoscope className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-3xl font-bold">Prática clínica</h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-coral-100/80">
                  Anamneses, fichas clínicas, evolução, relatórios, pareceres, escalas e
                  tabelas para as principais áreas da fonoaudiologia.
                </p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                  {ESPECIALIDADES.map((esp) => (
                    <li key={esp} className="rounded-full bg-white/10 px-3 py-1 text-sm ring-1 ring-white/15">
                      {esp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {PILARES.map((pilar) => (
              <div
                key={pilar.title}
                data-reveal="zoom"
                className="group flex flex-col rounded-[2rem] bg-white p-6 ring-1 ring-sand-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-coral-50 text-coral-700 transition-colors group-hover:bg-coral-700 group-hover:text-white">
                  <pilar.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-glia-900">{pilar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-glia-600">{pilar.body}</p>
              </div>
            ))}

            {/* Bônus */}
            <div
              data-reveal="zoom"
              className="rounded-[2rem] bg-sun-400 p-8 text-coral-950 md:col-span-4"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-coral-950 text-sun-300">
                    <Gift className="h-7 w-7" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest">De presente</p>
                    <p className="font-display text-2xl font-extrabold">Bônus exclusivos</p>
                  </div>
                </div>
                <ul className="grid gap-2 md:grid-cols-3 md:gap-4">
                  {BONUS.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-semibold">
                      <Plus className="mt-0.5 h-4 w-4 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Jornada — trilha horizontal */}
      <div className="bg-white px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 data-reveal className="text-balance text-center font-display text-4xl font-extrabold text-glia-900 sm:text-5xl">
            Sua jornada, <span className="italic text-coral-700">passo a passo</span>
          </h2>

          <div className="relative mt-16">
            <div
              aria-hidden="true"
              className="absolute left-6 top-6 hidden h-0.5 w-[calc(100%-3rem)] bg-gradient-to-r from-coral-200 via-coral-400 to-sun-400 md:block"
            />
            <ol className="reveal-stagger relative grid gap-10 md:grid-cols-5 md:gap-6">
              {JORNADA.map((passo, i) => (
                <li key={passo.title} data-reveal="zoom" className="relative flex gap-5 md:flex-col md:gap-0">
                  <span
                    className={`relative grid h-12 w-12 shrink-0 place-items-center rounded-full font-display text-lg font-bold ring-8 ring-white ${
                      i === JORNADA.length - 1 ? 'bg-sun-400 text-coral-950' : 'bg-coral-700 text-white'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="md:mt-6">
                    <h3 className="font-display text-lg font-bold leading-snug text-glia-900">{passo.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-glia-600">{passo.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* 6. Oferta — ingresso */}
      <div className="relative overflow-hidden bg-coral-900 px-4 py-20 sm:px-8 sm:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-coral-600/30 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-sun-400/15 blur-3xl" />
        </div>

        <div data-reveal="zoom" className="relative mx-auto max-w-5xl">
          <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-2xl md:grid-cols-[1.4fr_1fr]">
            <div className="p-8 sm:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-coral-600">Comece seu negócio hoje</p>
              <h2 className="mt-3 text-balance font-display text-3xl font-extrabold leading-tight text-glia-900 sm:text-4xl">
                Você não precisa descobrir tudo sozinha.
              </h2>
              <ul className="mt-8 space-y-3">
                {[
                  '+80 materiais profissionais e administrativos',
                  'Os 5 pilares: gestão, burocracia, rotina, clínica e personalização',
                  'Editável no Canva, sem precisar de Canva Pro',
                  'Bônus para pacientes, familiares e conteúdo',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-glia-700">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-coral-100 text-coral-700">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-glia-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-coral-600" /> Compra segura via Hotmart
                </span>
                <span className="flex items-center gap-1.5">
                  <InfinityIcon className="h-4 w-4 text-coral-600" /> Acesso vitalício
                </span>
              </div>
            </div>

            {/* Canhoto do ingresso */}
            <div className="relative flex flex-col items-center justify-center bg-sand-100 p-8 text-center sm:p-12">
              <div
                aria-hidden="true"
                className="absolute inset-x-6 top-0 border-t-2 border-dashed border-sand-300 md:inset-x-auto md:inset-y-6 md:left-0 md:border-l-2 md:border-t-0"
              />
              <span
                aria-hidden="true"
                className="absolute -top-5 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-coral-900 md:-left-5 md:top-0 md:translate-x-0"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-5 left-1/2 hidden h-10 w-10 -translate-x-1/2 rounded-full bg-coral-900 md:-left-5 md:block md:translate-x-0"
              />

              <p className="text-sm text-glia-500">
                De <s>R$97,00</s> por
              </p>
              <p className="mt-2 flex items-baseline gap-1.5 text-glia-900">
                <span className="text-lg font-semibold">10x</span>
                <span className="font-display text-6xl font-extrabold">7,99</span>
              </p>
              <p className="mt-2 text-sm text-glia-600">
                ou <strong className="text-glia-900">R$79,90</strong> à vista no PIX
              </p>
              <p className="mt-4 rounded-full bg-sun-100 px-3 py-1 text-xs font-bold text-sun-800">
                Para os primeiros 50 compradores
              </p>
              <div className="mt-8">
                <HotmartButton>Acessar o kit agora</HotmartButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. FAQ — acordeão + CTA final */}
      <div className="bg-white px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div data-reveal="left" className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="text-balance font-display text-4xl font-extrabold leading-tight text-glia-900 sm:text-5xl">
              Dúvidas frequentes
            </h2>
            <p className="mt-4 text-pretty text-lg text-glia-600">
              Tudo o que você precisa saber antes de garantir o seu acesso.
            </p>

            <div className="mt-10 rounded-[2rem] bg-glia-900 p-8 text-white">
              <p className="font-display text-2xl font-bold">Pronta para dar o próximo passo?</p>
              <div className="mt-6 flex flex-col gap-3">
                <HotmartButton variant="gold">Acesso imediato aqui</HotmartButton>
                <a
                  href={createWhatsAppLink('Olá! Quero fazer parte e adquirir o Fono na Prática.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start text-sm font-semibold text-glia-300 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Quero fazer parte (falar no WhatsApp)
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="reveal-stagger space-y-3">
            {FAQ_ITENS.map((item, i) => (
              <details
                key={item.title}
                data-reveal
                open={i === 0}
                className="group rounded-2xl bg-sand-50 ring-1 ring-sand-200 transition-colors open:bg-white open:shadow-md open:ring-coral-200"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-4">
                    <span className="font-display text-sm font-bold text-coral-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-lg font-bold text-glia-900">{item.title}</span>
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white ring-1 ring-sand-200 transition-transform duration-300 group-open:rotate-45 group-open:bg-coral-700 group-open:text-white group-open:ring-coral-700">
                    <Plus className="h-4 w-4" />
                  </span>
                </summary>
                <p className="px-6 pb-6 pl-[3.75rem] text-base leading-relaxed text-glia-600">{item.body}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* 8. Vitrine secundária */}
      <Ebooks />
    </section>
  );
}
