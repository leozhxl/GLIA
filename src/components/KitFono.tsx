import { Fragment } from 'react';
import { createWhatsAppLink } from '@/lib/constants';
import { Ebooks } from './Ebooks';

const TESTIMONIALS = [
  'O material ficou muito bom! Bem completo, e vai facilitar bastante no dia a dia, principalmente em algumas demandas em específico. O fato de ser direcionado para o Canva facilita demaaais na hora de editar, eu amei muito 🥹 você arrasou, sucesso ❤️',
  'oiiie, eu ameiii, simplesmente perfeito!!! 💖💖💖',
  'Só me formo no final do ano mas já quis garantir logoooo hahahaha💕 💕 💕\nMaravilhosaaa! Mt obrigada',
  'Oii queridaaa! Já dei uma espiada e adorei! Sou muito chata com organização e tava precisando de um norte! Obrigada pelo contato e pela disponibilidade 💗',
  'Simplesmente perfeito o kit fono, sem dúvida, não me arrependo do investimento!\nComo uma quase fono (formando bem pertinho já), me ajudou bastante e vai ser muito eficaz para os atendimentos.\nClaro que seus vídeos também refletem muito em aprendizado e conhecimento para nós. Continue nesse trabalho lindo.\nAssim como me inspirou como acadêmica e quase fono formada, tenho certeza que irá inspirar outras pessoas com tamanho profissionalismo e dedicação, além de sua energia contagiante!! ✨ 💗',
  'Amei o material, maravilhoso, tenho certeza que vai me ajudar muito ❤️',
  'Bom dia amiga.\nPassando para dar um feedback do Kit Fono. Achei simplesmente maravilhoso. Realmente é um material para facilitar nossa rotina. São documentos prontos e é totalmente editáveis. Além de lindos!! Achei a estética minimalista e chique.\nCom certeza eu irei utilizar muito. Estou impressionada com a praticidade.\n\nEu indico de olhos fechados, um kit essencial para os profissionais que tem a rotina cheia, e querem entregar documentos com uma boa apresentação!!',
];

export function KitFono() {
  return (
    <section id="kit-fono" className="section-anchor-offset relative overflow-hidden">
      <div className="bg-gradient-to-r from-[#3f5636] to-[#54705a] px-4 py-2 text-center text-xs text-white sm:px-8 sm:text-sm">
        ✨ Fono na Prática por apenas <strong className="font-bold">R$79,90</strong> (para os
        primeiros 50 compradores) ✨
      </div>

      <div className="bg-gradient-to-r from-[#f8f5f5] via-[#f3ecec] to-[#ece1e0] px-4 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="font-display text-[#3f5636]">
              <div data-reveal="zoom">
                <p className="text-2xl leading-none sm:text-3xl lg:text-4xl">
                  Fono na Prática,
                </p>
                <h2 className="mt-3 text-3xl font-normal leading-[1.05] sm:text-4xl lg:text-5xl">
                  Me formei, e agora ?
                </h2>
                <p className="mt-4 inline-block rounded-3xl bg-[#e3e9df] px-6 py-4 text-xl font-bold italic leading-[1.1] sm:text-2xl lg:text-3xl">
                  documentos práticos, editáveis e profissionais
                </p>
              </div>

              <div className="mt-10 flex flex-col items-start">
                <div className="w-full max-w-xs rounded-3xl bg-white px-6 py-4 text-center shadow-sm">
                  <p className="font-sans text-lg font-bold uppercase">
                    De <s className="text-red-500">R$97,00</s> por:
                  </p>
                  <p className="flex items-center justify-center gap-2 font-sans">
                    <span className="text-lg">10x</span>
                    <span className="text-4xl font-extrabold">R$7,99</span>
                  </p>
                  <p className="font-sans text-base">
                    ou <strong>R$79,90</strong> à vista.
                  </p>
                </div>

                <a
                  href="https://hotmart.com/pt-br/marketplace/produtos/hagsxd-fono-na-pratica-8ncmh/F107708482E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block rounded-full border-2 border-[#2f3f29] bg-[#3f5636] px-8 py-4 font-sans text-lg font-extrabold uppercase text-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-transform hover:scale-105"
                >
                  Acessar o kit agora
                </a>
              </div>
            </div>

            <div>
              <img
                src="/kit-fono.jpg"
                alt="Fonoaudióloga segurando os documentos editáveis do Fono na Prática"
                width="912"
                height="1146"
                className="mx-auto w-full max-w-md rounded-[2rem] shadow-[0_20px_50px_rgba(63,86,54,0.2)]"
              />
            </div>
          </div>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div className="font-display text-[#3f5636]">
            <h3 className="text-3xl leading-tight sm:text-4xl">
              <em className="font-bold">Fono</em>, se você tem:
            </h3>
            <ul className="mt-8 space-y-5 font-sans">
              {[
                'Anotações desorganizadas',
                'Medo de esquecer informações importantes na avaliação',
                'Insegurança para montar documentos do zero',
                'Vontade de já se preparar melhor para iniciar os atendimentos, mesmo na graduação',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-6 rounded-3xl border-4 border-[#8a8583] bg-[#f7f4f4] px-8 py-6 text-xl leading-snug shadow-[0_8px_20px_rgba(0,0,0,0.12)] sm:text-xl"
                >
                  <span aria-hidden="true" className="text-2xl leading-none">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl leading-snug text-[#3f5636] sm:text-3xl">
              Então esse kit foi criado
              <br />
              <span className="inline-block rounded-2xl bg-[#e3e9df] px-6 py-1">
                para <em className="font-bold">você!</em>
              </span>
            </p>
            <img
              src="/kit-fono-modelos.jpeg"
              alt="Exemplos dos documentos do Fono na Prática em telas de celular"
              width="531"
              height="383"
              loading="lazy"
              className="mt-10 w-full rounded-3xl shadow-[0_10px_30px_rgba(63,86,54,0.2)]"
            />
            <a
              href="https://hotmart.com/pt-br/marketplace/produtos/hagsxd-fono-na-pratica-8ncmh/F107708482E"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full border-2 border-[#2f3f29] bg-[#3f5636] px-8 py-4 font-sans text-lg font-extrabold uppercase text-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-transform hover:scale-105"
            >
              Quero meu Fono na Prática
            </a>
          </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-[#f8f5f5] via-[#f3ecec] to-[#ece1e0] px-4 pb-14 sm:px-8 sm:pb-20">
        <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-[#3f5636]/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-[#3f5636]">
          <div data-reveal="zoom">
            <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl">
              O que é o
              <br />
              <em className="font-extrabold">FONO NA PRÁTICA</em>?
            </h2>
            <p className="mt-6 max-w-3xl text-justify font-sans text-lg leading-relaxed sm:text-lg">
              Um material pensado para facilitar sua rotina clínica e deixar seus
              atendimentos mais estruturados, seguros e profissionais:{' '}
              <strong>+70 documentos totalmente editáveis no Canva</strong> que
              abrangem diferentes áreas da Fonoaudiologia, elaborados com apoio de
              especialistas e organizados conforme as diretrizes do Conselho
              Federal de Fonoaudiologia.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div
              data-reveal="zoom"
              className="group rounded-3xl border border-white/70 bg-white/60 p-8 shadow-[0_10px_30px_rgba(63,86,54,0.12)] backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(63,86,54,0.25)]"
            >
              <p className="bg-gradient-to-r from-[#3f5636] to-[#7a9a6d] bg-clip-text font-display text-6xl leading-none text-transparent transition-transform duration-300 group-hover:scale-105">
                +70
              </p>
              <h3 className="mt-4 font-display text-xl font-bold">
                Documentos editáveis
              </h3>
              <p className="mt-3 font-sans text-lg leading-relaxed">
                Materiais para diferentes áreas: anamneses, fichas de avaliação,
                modelos de relatórios, escalas e tabelas específicas, documentos
                para organização clínica e cartilhas de apoio.
              </p>
            </div>

            <div
              data-reveal="zoom"
              className="group rounded-3xl bg-gradient-to-br from-[#3f5636] to-[#54705a] p-8 text-white shadow-[0_10px_30px_rgba(63,86,54,0.3)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(63,86,54,0.45)]"
            >
              <p className="font-display text-4xl leading-none sm:text-5xl">
                + BÔNUS
              </p>
              <ul className="mt-6 space-y-4 font-sans text-lg">
                {[
                  'Materiais de explicação para pacientes e familiares',
                  'Guia rápido para gravar conteúdos profissionais',
                  'Recursos essenciais para começar a atender',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-2"
                  >
                    <span aria-hidden="true" className="mt-1 text-[#e3e9df]">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Ebooks />

      <div className="bg-gradient-to-r from-[#f8f5f5] via-[#f3ecec] to-[#e6d9d6] px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2">
        <div className="text-[#3f5636]">
          <h2 data-reveal="zoom" className="font-display text-3xl sm:text-4xl">
            <em className="font-bold">Dúvidas</em> frequentes:
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
                    e segurança. E recém-formadas.
                  </>
                ),
              },
              {
                n: '05',
                title: 'Atende só uma especialidade?',
                body: (
                  <>
                    Não! É um kit pensado para organizar sua prática clínica em{' '}
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
                <li data-reveal="zoom" className="flex items-start gap-8">
                  <span className="font-display text-5xl leading-none">{item.n}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold sm:text-2xl">{item.title}</h3>
                    <p className="mt-2 font-sans text-lg leading-relaxed">{item.body}</p>
                  </div>
                </li>
                {item.n === '03' && (
                  <li>
                    <a
                      href="https://hotmart.com/pt-br/marketplace/produtos/hagsxd-fono-na-pratica-8ncmh/F107708482E"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full border-2 border-[#2f3f29] bg-[#3f5636] px-8 py-4 font-sans text-lg font-extrabold uppercase text-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-transform hover:scale-105"
                    >
                      Acesso imediato aqui
                    </a>
                  </li>
                )}
              </Fragment>
            ))}
          </ol>

          <a
            href="https://hotmart.com/pt-br/marketplace/produtos/hagsxd-fono-na-pratica-8ncmh/F107708482E"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block rounded-full border-2 border-[#2f3f29] bg-[#3f5636] px-8 py-4 font-sans text-lg font-extrabold uppercase text-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-transform hover:scale-105"
          >
            Acesso imediato aqui
          </a>
        </div>

        <div className="space-y-10">
          <img
            src="/kit-fono-anamnese.png"
            alt="Exemplo de anamnese do Fono na Prática em tablet e celular"
            width="510"
            height="560"
            loading="lazy"
            className="mx-auto w-full max-w-md"
          />
          <img
            src="/kit-fono-tablets.png"
            alt="Exemplos de avaliação, lista de exercícios e instruções do Fono na Prática em tablets"
            width="656"
            height="619"
            loading="lazy"
            className="mx-auto w-full max-w-md"
          />
        </div>
        </div>
      </div>

      <div className="relative z-10 bg-gradient-to-r from-[#f1eded] via-[#e9dfdd] to-[#dccdc9] px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl text-[#1f2a1c]">
          <div data-reveal="zoom" className="text-center text-[#3f5636]">
            <h2 className="font-sans text-3xl font-extrabold italic leading-tight sm:text-5xl">
              O que quem comprou
              <br />
              está dizendo?
            </h2>
            <p className="mt-3 font-sans text-xl">Depoimentos reais!</p>
          </div>

          <div className="mt-16 gap-8 lg:columns-2">
            {TESTIMONIALS.map((text, i) => (
              <figure
                key={i}
                data-reveal="zoom"
                className="mb-8 break-inside-avoid rounded-3xl bg-[#f1f4f4] p-8 font-sans text-lg leading-relaxed shadow-[0_8px_24px_rgba(63,86,54,0.12)]"
              >
                {text.split('\n').map((line, j) => (
                  <p key={j} className={line ? 'mt-2 first:mt-0' : 'h-3'}>
                    {line}
                  </p>
                ))}
              </figure>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href={createWhatsAppLink('Olá! Quero fazer parte e adquirir o Fono na Prática.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border-2 border-[#2f3f29] bg-[#3f5636] px-12 py-5 font-sans text-xl font-extrabold uppercase text-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-transform hover:scale-105"
            >
              Quero fazer parte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
