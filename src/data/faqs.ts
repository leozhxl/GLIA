export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'Como funciona a primeira consulta?',
    answer: 'A primeira consulta é uma avaliação inicial com o especialista da área de interesse, ou com nossa pediatra coordenadora, que fará uma visão geral do desenvolvimento. A partir dela, definimos juntos se são necessárias avaliações adicionais e qual o melhor caminho terapêutico.',
  },
  {
    question: 'Qual faixa etária a clínica atende?',
    answer: 'Atendemos crianças de 0 a 12 anos. Cada especialidade tem foco em um recorte etário, mas o acompanhamento é sempre ajustado ao momento do desenvolvimento do seu filho — não apenas à idade.',
  },
  {
    question: 'Vocês fazem diagnóstico de TEA e TDAH?',
    answer: 'Sim. Contamos com neuropsicóloga e pediatra capacitados para processo diagnóstico completo de TEA, TDAH e demais condições do neurodesenvolvimento, com laudos detalhados e devolutiva para a família e a escola.',
  },
  {
    question: 'Os profissionais conversam entre si sobre meu filho?',
    answer: 'Sim, esse é o coração da GLIA. Nossa equipe se reúne periodicamente em discussões de caso, de modo que o plano terapêutico é sempre integrado. Cada especialista sabe o que o outro está trabalhando — e a família acompanha tudo.',
  },
  {
    question: 'Como faço para agendar uma avaliação?',
    answer: 'Basta preencher o formulário nesta página ou falar conosco no WhatsApp. Nossa equipe entra em contato no melhor horário para você, confirma a especialidade e agenda a primeira avaliação.',
  },
];