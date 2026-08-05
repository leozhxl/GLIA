export interface Testimonial {
  quote: string;
  author: string;
  context: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Chegamos à GLIA perdidos, depois de passar por três profissionais diferentes sem ninguém conversar entre si. Aqui, pela primeira vez, sentamos com toda a equipe e entendemos o que o nosso filho realmente precisa.',
    author: 'Mariana S.',
    context: 'mãe do Theo, 5 anos · TEA',
  },
  {
    quote: 'A diferença foi imediata. A fono e a ABA trabalham juntas, e a gente sente que existe um plano. Meu filho começou a se comunicar de um jeito que eu não imaginava ser possível em tão pouco tempo.',
    author: 'Carlos e Patrícia',
    context: 'pais da Helena, 4 anos · atraso de fala',
  },
  {
    quote: 'O diagnóstico de TDAH do meu filho veio com um laudo tão completo que a escola entendeu tudo. A GLIA nos explicou cada etapa, sem pressa e sem jargão. Senti que meu filho foi visto de verdade.',
    author: 'A. Oliveira',
    context: 'mãe do Lucas, 8 anos · TDAH',
  },
  {
    quote: 'O ambiente é pensado para criança — meu filho pergunta quando vamos voltar. E eu, como mãe, me sinto amparada. Isso não tem preço.',
    author: 'Juliana R.',
    context: 'mãe da Sofia, 6 anos · ansiedade',
  },
];
