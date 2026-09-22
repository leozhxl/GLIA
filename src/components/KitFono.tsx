import { Fragment } from 'react';
import {
  Wallet,
  FileStack,
  CalendarCheck,
  Stethoscope,
  Palette,
  Gift,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { createWhatsAppLink } from '@/lib/constants';
import { Ebooks } from './Ebooks';
import { SectionDivider } from './SectionDivider';

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

const PILARES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Wallet,
    title: 'Gestão e organização',
    body: 'Fluxo de caixa, controles financeiros, agenda, pacientes, pagamentos e rotina operacional.',
  },
  {
    icon: FileStack,
    title: 'Parte administrativa e burocrática',
    body: 'Modelos de documentos, cadastros, controles, termos, checklists e registros.',
  },
  {
    icon: CalendarCheck,
    title: 'Rotina profissional',
    body: 'Lista de presença, fichas de acompanhamento, organização de atendimentos e documentos de apoio.',
  },
  {
    icon: Stethoscope,
    title: 'Prática clínica',
    body: 'Anamneses, fichas clínicas, evolução, relatórios, pareceres, escalas e tabelas, cobrindo audição, equilíbrio, disfagia, fala/linguagem e motricidade orofacial.',
  },
  {
    icon: Palette,
    title: 'Personalização profissional',
    body: 'Tudo editável para você inserir sua logomarca, identidade visual e os dados do seu consultório.',
  },
];

const JORNADA = [
  { title: 'Organize seu negócio', body: 'Coloque o financeiro e a rotina em ordem antes de abrir as portas.' },
  { title: 'Estruture seus processos', body: 'Defina fluxos, controles e documentos administrativos.' },
  { title: 'Personalize seus documentos', body: 'Adicione sua logomarca e identidade visual em cada material.' },
  { title: 'Prepare sua rotina clínica', body: 'Anamneses, fichas e relatórios prontos para usar com seus pacientes.' },
  { title: 'Dê os primeiros passos', body: 'Comece a atender com mais segurança na sua trajetória profissional.' },
];

function PriceCard() {
  return (
    <div className="w-full max-w-xs rounded-3xl bg-white/[0.06] p-6 text-center ring-1 ring-white/15 backdrop-blur-sm">
      <p className="text-sm font-bold uppercase tracking-wider text-coral-50/70">
        De <s className="text-sun-300/80">R$97,00</s> por:
      </p>
      <p className="mt-1 flex items-center justify-center gap-2">
        <span className="text-lg text-white">10x</span>
        <span className="font-display text-4xl font-extrabold text-white">R$7,99</span>
      </p>
      <p className="mt-1 text-sm text-coral-50/70">
        ou <strong className="text-white">R$79,90</strong> à vista (PIX)
      </p>
    </div>
  );
}

function CtaButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={HOTMART_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-sun-400 px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-coral-950 shadow-lg shadow-sun-900/30 transition-all hover:-translate-y-0.5 hover:bg-sun-300 hover:shadow-xl"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

export function KitFono() {
  return (
    <section id="kit-fono" className="section-anchor-offset relative overflow-hidden">
      <div className="bg-sun-500 px-4 py-2 text-center text-xs font-bold text-coral-950 sm:px-8 sm:text-sm">
        ✨ Fono na Prática por apenas R$79,90 (para os primeiros 50 compradores) ✨
      </div>

      {/* 1. Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-coral-950 via-coral-900 to-coral-800 px-4 py-20 text-white sm:px-8 sm:py-28">
        <SectionDivider />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-96 w-96 animate-blob-morph-slow rounded-blob bg-coral-400/20 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-80 w-80 animate-blob-morph rounded-blob bg-sun-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div data-reveal="zoom" className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sun-300">
              Fono na Prática
            </p>
            <h1 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Me formei. E agora?
            </h1>
            <p className="mt-6 text-pretty font-display text-xl italic leading-snug text-sun-200 sm:text-2xl">
              Da primeira ideia à porta aberta do seu próprio negócio.
            </p>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-coral-50/70">
              +80 materiais profissionais e administrativos, 100% editáveis no Canva
              (sem precisar de Canva Pro), para você organizar, estruturar e abrir
              seu consultório com mais segurança.
            </p>
          </div>

          <div data-reveal className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <PriceCard />
            <CtaButton>Quero começar meu negócio</CtaButton>
          </div>
        </div>
      </div>

      {/* 2. Identificação */}
      <div className="bg-sand-50 px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div data-reveal="zoom" className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-display text-3xl font-extrabold text-glia-900 sm:text-4xl">
              Você se formou e não sabe por onde começar?
            </h2>
            <p className="mt-4 text-pretty text-lg text-glia-600">
              É normal se perguntar tudo isso agora:
            </p>
          </div>

          <div className="reveal-stagger mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DORES.map((item) => (
              <div
                key={item}
                data-reveal="zoom"
                className="rounded-2xl border border-sand-300 bg-white p-6 text-lg font-medium leading-snug text-glia-800 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>

          <p data-reveal className="mx-auto mt-12 max-w-2xl text-pretty text-center text-lg leading-relaxed text-glia-700">
            Anotações desorganizadas, medo de esquecer informações na avaliação e
            insegurança para montar documentos do zero não precisam mais fazer
            parte da sua rotina.
          </p>
        </div>
      </div>

      {/* 3. Virada */}
      <div className="bg-glia-900 px-4 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 data-reveal="zoom" className="text-balance font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            A faculdade prepara você para ser fono.
          </h2>
          <p data-reveal className="mt-4 text-balance font-display text-2xl italic text-sun-300 sm:text-3xl">
            Mas quem prepara você para abrir um negócio?
          </p>
          <p data-reveal className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-glia-300">
            Existe uma empresa por trás de todo consultório. O{' '}
            <strong className="text-white">Fono na Prática</strong> é a base completa
            para você sair do zero e chegar à prática profissional: materiais
            totalmente editáveis no Canva, elaborados com apoio de especialistas e
            organizados conforme as diretrizes do Conselho Federal de
            Fonoaudiologia.
          </p>
        </div>
      </div>

      {/* 5. Os 5 pilares */}
      <div className="relative overflow-hidden bg-gradient-to-br from-coral-900 via-coral-800 to-coral-900 px-4 py-20 text-white sm:px-8 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 top-1/3 h-96 w-96 animate-blob-morph-slow rounded-blob bg-sun-400/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <div data-reveal="zoom" className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-display text-3xl font-extrabold sm:text-4xl">
              Tudo que você precisa, em 5 pilares
            </h2>
          </div>

          <div className="reveal-stagger mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILARES.map((pilar) => (
              <div
                key={pilar.title}
                data-reveal="zoom"
                className="group relative overflow-hidden rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-sun-300/40"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sun-400 to-sun-600 text-coral-950 shadow-lg">
                  <pilar.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{pilar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-coral-50/70">{pilar.body}</p>
              </div>
            ))}
          </div>

          {/* 6. Você não precisa descobrir tudo sozinha */}
          <div data-reveal className="mx-auto mt-14 max-w-3xl rounded-3xl border border-sun-300/30 bg-white/[0.04] p-8 text-center sm:p-10">
            <h3 className="text-balance font-display text-xl font-bold sm:text-2xl">
              Você não precisa descobrir tudo sozinha.
            </h3>
            <p className="mt-4 text-pretty text-base leading-relaxed text-coral-50/70">
              Em vez de começar do zero, em frente a uma folha em branco, você
              recebe modelos prontos e editáveis para cada etapa: do financeiro à
              ficha clínica. É só personalizar com a sua logo e os seus dados, e
              usar.
            </p>
          </div>

          {/* 7. Bônus */}
          <div data-reveal="zoom" className="mx-auto mt-8 max-w-3xl rounded-3xl bg-gradient-to-br from-sun-500 to-sun-600 p-8 text-coral-950 shadow-xl sm:p-10">
            <div className="flex items-center gap-3">
              <Gift className="h-8 w-8" />
              <p className="font-display text-2xl font-extrabold">+ Bônus</p>
            </div>
            <ul className="mt-6 space-y-3 text-base font-medium">
              {[
                'Materiais de explicação para pacientes e familiares',
                'Guia rápido para gravar conteúdos profissionais',
                'Recursos essenciais para começar a atender',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 8. Jornada em 5 passos */}
      <div className="bg-sand-50 px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 data-reveal="zoom" className="text-balance text-center font-display text-3xl font-extrabold text-glia-900 sm:text-4xl">
            Sua jornada, passo a passo
          </h2>

          <ol className="relative mt-14 space-y-10 border-l-2 border-coral-300 pl-8">
            {JORNADA.map((passo, i) => (
              <li key={passo.title} data-reveal="zoom" className="relative">
                <span className="absolute -left-[2.55rem] grid h-8 w-8 place-items-center rounded-full bg-coral-600 font-display text-sm font-bold text-white ring-4 ring-sand-50">
                  {i + 1}
                </span>
                <h3 className="font-display text-xl font-bold text-glia-900">{passo.title}</h3>
                <p className="mt-1 text-base leading-relaxed text-glia-600">{passo.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* 9. Oferta */}
      <div className="relative overflow-hidden bg-gradient-to-br from-coral-950 via-coral-900 to-coral-800 px-4 py-20 text-white sm:px-8 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 animate-blob-morph-slow rounded-blob bg-sun-400/10 blur-3xl" />
        </div>
        <div data-reveal="zoom" className="relative mx-auto flex max-w-lg flex-col items-center text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold sm:text-4xl">
            Comece seu negócio hoje
          </h2>
          <div className="mt-8">
            <PriceCard />
          </div>
          <div className="mt-8">
            <CtaButton>Acessar o kit agora</CtaButton>
          </div>
        </div>
      </div>

      {/* 12. Vitrine secundária */}
      <Ebooks />

      {/* 10. FAQ */}
      <div className="bg-white px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 data-reveal="zoom" className="text-balance font-display text-3xl font-extrabold text-glia-900 sm:text-4xl">
            Dúvidas frequentes
          </h2>

          <ol className="mt-12 space-y-8">
            {[
              {
                n: '01',
                title: 'Como adquirir?',
                body: (
                  <>
                    Clique no botão <strong>“QUERO ADQUIRIR”</strong> e escolha a melhor
                    forma de pagamento, <strong>R$79,90 à vista</strong> ou PIX, ou
                    parcelado em até 10x de R$7,99 no cartão de crédito.
                  </>
                ),
              },
              {
                n: '02',
                title: 'O acesso é imediato?',
                body: (
                  <>
                    Após a compra, entre na sua conta da <strong>Hotmart</strong> com o
                    mesmo e-mail utilizado no pagamento e acesse a aba{' '}
                    <strong>“Meus produtos”</strong>. O Fono na Prática ficará disponível ali
                    sempre que precisar.
                  </>
                ),
              },
              {
                n: '03',
                title: 'Tudo é editável?',
                body: (
                  <>
                    Sim! E você <strong>NÃO precisa</strong> ter{' '}
                    <strong>CANVA PRO</strong> nem dominar o Canva, apenas colocar a sua
                    logo e os dados. Simples e prático.
                  </>
                ),
              },
              {
                n: '04',
                title: 'É apenas para fonos formadas?',
                body: (
                  <>
                    Não. O material foi pensado também para estudantes que querem se
                    preparar melhor para iniciar os atendimentos com mais organização
                    e segurança, e para recém-formadas que estão começando a estruturar
                    o próprio negócio.
                  </>
                ),
              },
              {
                n: '05',
                title: 'Atende só uma especialidade?',
                body: (
                  <>
                    Não! É uma base pensada para organizar sua prática clínica em{' '}
                    <strong>diferentes áreas.</strong> Como audição, equilíbrio,
                    disfagia, fala/linguagem, motricidade orofacial...
                  </>
                ),
              },
              {
                n: '06',
                title: 'O acesso é vitalício?',
                body: (
                  <>
                    Sim! Após a compra você terá acesso ao Fono na Prática de forma
                    vitalícia, mesmo quando houver atualizações.
                  </>
                ),
              },
            ].map((item) => (
              <Fragment key={item.n}>
                <li data-reveal="zoom" className="flex items-start gap-6 border-b border-glia-100 pb-8">
                  <span className="font-display text-4xl font-bold leading-none text-coral-300">{item.n}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-glia-900">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-glia-600">{item.body}</p>
                  </div>
                </li>
                {item.n === '03' && (
                  <li>
                    <a
                      href={HOTMART_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-coral-600 px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-coral-700"
                    >
                      Acesso imediato aqui
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </li>
                )}
              </Fragment>
            ))}
          </ol>

          <a
            href={HOTMART_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-coral-600 px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-coral-700"
          >
            Acesso imediato aqui
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* 11. CTA final */}
      <div className="relative overflow-hidden bg-glia-900 px-4 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 data-reveal="zoom" className="text-balance font-display text-3xl font-extrabold sm:text-4xl">
            Pronta para dar o próximo passo?
          </h2>
          <div data-reveal className="mt-8 flex justify-center">
            <a
              href={createWhatsAppLink('Olá! Quero fazer parte e adquirir o Fono na Prática.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sun-400 px-10 py-5 text-base font-extrabold uppercase tracking-wide text-coral-950 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-sun-300"
            >
              Quero fazer parte
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
