export interface EbookLink {
  label: string;
  href: string;
}

export interface Ebook {
  slug: string;
  title: string;
  /** Texto curto exibido no card. */
  description: string;
  /** Texto completo exibido na página do produto (aceita linhas em branco para parágrafos). */
  longDescription?: string;
  price: string;
  image?: string;
  /** Links da página do produto, ex.: [{ label: 'Comprar agora', href: 'https://...' }]. */
  links?: EbookLink[];
}

// Ao clicar em "Quero este e-book", abre a página do produto (#/ebook/<slug>).
// Preencha `longDescription`, `price` e `links` de cada produto.
// Sem `links`, a página mostra um botão que abre o WhatsApp da clínica.
export const EBOOKS: Ebook[] = [
  {
    slug: 'afasia-pos-avc',
    title: 'Afasia na Prática: 50 Sessões de Fonoaudiologia para Reabilitação da Linguagem',
    description: '50 sessões prontas com atividades para linguagem, comunicação, memória e discurso.',
    longDescription:
      'Material prático desenvolvido para fonoaudiólogos que atuam na reabilitação de adultos com afasia e alterações de linguagem adquiridas. Reúne 50 sessões com atividades prontas para aplicação, trabalhando linguagem, nomeação, compreensão, memória, organização do discurso, números e comunicação funcional. Um recurso para facilitar o planejamento terapêutico e ampliar as possibilidades de intervenção clínica.',
    price: 'R$ 14,90',
    links: [{ label: 'Comprar agora', href: 'https://go.hotmart.com/F107467117B' }],
    image: '/ebook-afasia-pos-avc.jpeg',
  },
  {
    slug: 'tdl-na-pratica',
    title: 'TDL NA PRÁTICA -  10 Atividades Clínicas Prontas para Aplicar',
    description: '10 atividades clínicas prontas para aplicar, para avaliação e intervenção.',
    longDescription:
      'TDL na Prática é um material desenvolvido para profissionais que atuam com o desenvolvimento infantil e desejam tornar a observação e a estimulação da linguagem mais organizadas e funcionais. Reúne 10 atividades práticas, fichas de aplicação e registro, sugestões de observação clínica e recursos para auxiliar na identificação das habilidades que precisam ser estimuladas e no planejamento das intervenções',
    price: 'R$ 19,90',
    links: [{ label: 'Comprar agora', href: 'https://go.hotmart.com/D107320333W' }],
    image: '/ebook-tdl-na-pratica.jpeg',
  },
  {
    slug: 'tchau-chupeta',
    title: 'Tchau, Chupeta! | Guia Prático para Tirar a Chupeta com Segurança e Acolhimento',
    description: 'Como ajudar seu filho a abandonar a chupeta com segurança e acolhimento.',
    longDescription:
      'Seu filho está crescendo, mas a chupeta ainda faz parte da rotina? 💙\n\nO Tchau, Chupeta! é um guia desenvolvido para ajudar mães, pais e responsáveis a compreenderem melhor o uso da chupeta e conduzirem o momento da despedida de forma gradual, respeitosa e acolhedora.\n\nCriado por Juliana Fernandes, Fonoaudióloga Infantil, o material reúne informações e estratégias práticas para tornar esse processo mais tranquilo para a criança e para toda a família.\n\n🩷 Neste e-book você vai encontrar:\n\n• Informações sobre o uso da chupeta e o desenvolvimento infantil;\n• Possíveis impactos do uso prolongado na fala, linguagem, dentição, estruturas orofaciais e audição;\n• Sinais de alerta que os pais devem observar;\n• Orientações sobre quando buscar uma avaliação fonoaudiológica;\n• Estratégias práticas para começar a reduzir o uso da chupeta;\n• Sugestões para criar novos hábitos e formas de conforto;\n• Orientações para envolver toda a família no processo;\n• Estratégias de elogios, recompensas e reforço das pequenas conquistas.\n\n🎁 E ainda acompanha materiais extras para tornar a despedida mais divertida:\n\n⭐ Quadro Controle Tchau, Chupeta! — para acompanhar e comemorar cada avanço da criança;\n🏆 Certificado Tchau, Chupeta! — para celebrar o grande dia em que ela conseguir se despedir da chupeta.\n\nMais do que simplesmente “tirar a chupeta”, a proposta é ajudar a família a transformar esse momento em uma experiência positiva de crescimento e conquista.\n\n💙 Informação para os pais.\n🩷 Acolhimento para a criança.\n✨ Mais segurança para viver essa nova fase.\n\nDê o primeiro passo para o Tchau, Chupeta!',
    price: 'R$ 14,90',
    links: [{ label: 'Comprar agora', href: 'https://go.hotmart.com/I107305203V' }],
    image: '/ebook-tchau-chupeta.jpeg',
  },
  {
    slug: 'jogo-dos-fonemas',
    title: 'Jogo dos Fonemas – Aprendendo e Brincando com os Sons da Fala',
    description: 'Brincando com os sons da fala. Material digital de acesso imediato.',
    longDescription:
      'O Jogo dos Fonemas é um material lúdico desenvolvido para tornar a estimulação dos sons da fala mais divertida e dinâmica.\n\nCom atividades envolvendo diferentes grupos de fonemas, o material pode ser utilizado como recurso durante os atendimentos fonoaudiológicos, auxiliando na prática e na generalização dos sons trabalhados.\n\n🗣️ Plosivas\n💨 Fricativas\n👃 Nasais\n👅 Líquidas\n🔊 Arquifonemas\n🔤 Grupos consonantais\n\nUm recurso prático para imprimir, brincar e estimular!\n\nIdeal para fonoaudiólogos e estudantes de Fonoaudiologia.',
    price: 'R$ 39,90',
    links: [{ label: 'Comprar agora', href: 'https://go.hotmart.com/M107236158U' }],
    image: '/ebook-jogo-dos-fonemas.jpeg',
  },
  {
    slug: 'desenvolvendo-a-fala',
    title: 'Desenvolvendo a Fala: Guia Prático para Estimular a Linguagem Infantil em Casa',
    description: 'Atividades práticas para estimular a linguagem infantil em casa.',
    longDescription:
      'O Desenvolvendo a Fala é um guia prático criado para pais e cuidadores que desejam estimular a comunicação e a linguagem infantil de forma simples, natural e possível de aplicar em casa.\n\nVocê aprenderá como transformar momentos da rotina, brincadeiras, músicas e leitura em oportunidades para a criança ampliar o vocabulário, desenvolver frases e se comunicar com mais funcionalidade.\n\nO material inclui 10 atividades práticas, estratégias de estimulação por faixa etária, marcos do desenvolvimento da linguagem, sinais de alerta, orientações sobre o que evitar, checklist de acompanhamento e um Desafio de 7 Dias para Estimular a Fala.\n\nUm material direto e fácil de aplicar, desenvolvido por Juliana Fernandes, Fonoaudióloga Clínica Infantil, para ajudar as famílias a compreenderem que estimular a fala pode fazer parte dos pequenos momentos do dia a dia.\n\nIndicado principalmente para famílias com crianças de 0 a 5 anos.\n\nMaterial educativo. Não substitui avaliação ou acompanhamento fonoaudiológico individualizado.',
    price: 'R$ 14,90',
    links: [{ label: 'Comprar agora', href: 'https://go.hotmart.com/J100730027T' }],
    image: '/ebook-desenvolvendo-a-fala.jpeg',
  },
  {
    slug: 'processamento-auditivo',
    title: 'Como estimular o processamento auditivo na fala e na linguagem',
    description: 'Ideias de atividades na terapia de fala e linguagem.',
    longDescription:
      'O processamento auditivo desempenha um papel fundamental no desenvolvimento da fala e da linguagem. Estimular essa habilidade significa ajudar a criança a perceber, interpretar e organizar corretamente os sons que escuta no ambiente. Isso impacta diretamente a atenção, compreensão verbal, vocabulário e articulação das palavras.\n\nNeste conteúdo, você vai entender como funciona o processamento auditivo e aprender estratégias práticas para estimulá-lo no dia a dia da criança. Serão apresentadas atividades lúdicas, exercícios de escuta ativa, diferenciação de sons, jogos de rima, identificação de sons do ambiente e muito mais — sempre respeitando o ritmo e as necessidades de cada criança.\n\nIdeal para pais, educadores e profissionais que desejam fortalecer a base da linguagem de forma natural, afetiva e eficaz.',
    price: 'R$ 89,90',
    links: [{ label: 'Comprar agora', href: 'https://go.hotmart.com/V100732372H' }],
    image: '/ebook-processamento-auditivo.jpeg',
  },
  {
    slug: 'anamnese-comentada',
    title: 'ANAMNESE DO DESENVOLVIMENTO INFANTIL NA PRÁTICA',
    description: 'Desenvolvimento infantil e atipicidades: saiba o que perguntar e observar.',
    longDescription:
      'Anamnese Comentada – Desenvolvimento Infantil e Atipicidades\n\nUm material prático para profissionais e estudantes da área infantil que desejam conduzir anamneses com mais segurança e olhar clínico.\n\nVocê vai aprender o que perguntar, como aprofundar cada pergunta e o que observar nas respostas da família, passando pelas principais áreas do desenvolvimento infantil.\n\n🎁 Bônus: Anamnese completa em PDF, pronta para imprimir e aplicar nos atendimentos.\n\nMais organização, segurança e clareza para suas avaliações.',
    price: 'R$ 24,90',
    links: [{ label: 'Comprar agora', href: 'https://go.hotmart.com/U100733531M' }],
    image: '/ebook-anamnese-comentada.jpeg',
  },
  {
    slug: 'brincando-com-a-voz',
    title: 'Brincando com a Voz - Guia Prático de Cuidados e Atividades para Crianças com Rouquidão e Disfonia',
    description: 'Guia prático de cuidados e atividades para crianças com rouquidão e disfonia.',
    longDescription:
      'O Brincando com a Voz é um material digital, prático e lúdico desenvolvido para auxiliar nos cuidados com a voz infantil, tornando as orientações e atividades mais fáceis de compreender e aplicar.\n\nAlém do e-book, você terá acesso a vídeos explicativos, nos quais os exercícios são demonstrados passo a passo, facilitando a compreensão de como realizar e orientar cada proposta.\n\nNo material você encontrará atividades de percepção e cuidado vocal, estratégias para reduzir comportamentos de sobrecarga da voz, brincadeiras respiratórias e vocais, Semáforo da Voz, Detetive da Voz, Missão da Água, Termômetro da Voz, desafio de 7 dias, além de orientações para pais e cuidadores.\n\n🎥 VÍDEOS EXPLICATIVOS: demonstração prática dos exercícios e de como aplicá-los.\n🎁 BÔNUS: Caderno de Atividades da Voz em PDF, pronto para imprimir e utilizar.\n\nIndicado especialmente para fonoaudiólogos, estudantes de Fonoaudiologia e profissionais que atuam com crianças, podendo também ser utilizado como recurso de orientação às famílias.\n\nE-book + vídeos demonstrativos + atividades imprimíveis: conteúdo prático para você entender, aplicar e orientar com mais segurança.',
    price: 'R$ 19,90',
    links: [{ label: 'Comprar agora', href: 'https://go.hotmart.com/G101549493F' }],
    image: '/ebook-brincando-com-a-voz.jpeg',
  },
  {
    slug: 'primeiras-palavrinhas',
    title: 'Como ajudar seu filho a falar',
    description: 'Da Fono para os Pais: como ajudar seu filho a começar a falar.',
    longDescription:
      'Este e-book foi criado a fim de orientar as mães, pais, professores e cuidadores sobre os cuidados que devem ter com relação ao desenvolvimento da comunicação de seus filhos. Na minha vivência clínica pude constatar como as mães e os demais membros da família apresentam dificuldades para entenderem o processo evolutivo da fala nas crianças. Hoje sabemos que todas, sem exceção, devem ser estimuladas, desde a gestação para que adquiram um adequado desenvolvimento da linguagem. Este e-book foi elaborado com muito carinho, com linguagem simples, com o propósito de facilitar o entendimento da mãe sobre este assunto, que é motivo de tantas dúvidas e inseguranças. Espero que você consiga, a partir da leitura, colaborar com o desenvolvimento da fala e linguagem de seu filho, tornando a convivência e a comunicação o mais natural possível, respeitando sempre as condições e características de cada um.',
    price: 'R$ 19,90',
    links: [{ label: 'Comprar agora', href: 'https://go.hotmart.com/X102896299K' }],
    image: '/ebook-primeiras-palavrinhas.jpeg',
  },
  {
    slug: 'm-chat-r',
    title: 'M-CHAT na Clínica Fonoaudiológica: Do Rastreio à Conduta',
    description: 'Do rastreio à conduta: guia prático para aplicar, interpretar e conduzir.',
    longDescription:
      'M-CHAT na Clínica Fonoaudiológica: Do Rastreio à Conduta\n\nO M-CHAT-R (Modified Checklist for Autism in Toddlers – Revised) é um instrumento de rastreio utilizado para identificar sinais de risco para o Transtorno do Espectro Autista (TEA) em crianças pequenas.\n\nEste guia foi desenvolvido para auxiliar o fonoaudiólogo na utilização do M-CHAT-R no contexto da clínica infantil, trazendo orientações práticas para sua aplicação, interpretação dos resultados e definição das condutas diante dos sinais observados.\n\nÉ importante destacar que o M-CHAT-R é um instrumento de rastreio e não estabelece diagnóstico de TEA. Seus resultados devem ser considerados em conjunto com a observação clínica fonoaudiológica, a história do desenvolvimento da criança, a escuta qualificada da família e demais informações relevantes do acompanhamento.\n\nNesse processo, o fonoaudiólogo possui papel importante na identificação precoce de sinais de alerta relacionados à comunicação, linguagem, interação social e desenvolvimento* podendo orientar os responsáveis e, quando necessário, realizar encaminhamentos para avaliação multiprofissional.\n\nEste material busca proporcionar mais segurança, organização e raciocínio clínico ao profissional, contribuindo para uma atuação responsável desde o rastreio até a tomada de decisão sobre as próximas condutas.\n\nRastrear não é diagnosticar. É identificar sinais de risco para possibilitar investigação e intervenção no momento adequado.',
    price: 'R$ 29,90',
    links: [{ label: 'Comprar agora', href: 'https://go.hotmart.com/W103852896R' }],
    image: '/ebook-m-chat-r.jpeg',
  },
  {
    slug: 'desfralde-consciente',
    title: 'DESFRALDE CONSCIENTE',
    description: 'Um guia prático, respeitoso e acolhedor para uma jornada de sucesso.',
    longDescription:
      'Esse ebook trata de uma das etapas do desenvolvimento infantil em que há muitas dúvidas, expectativas e informações incorretas e obsoletas: o desfralde. O objetivo aqui , é esclarecer dúvidas e promover conhecimento para que esse processo tão importante seja consciente e respeitoso. Mais do que isso, levar informações de qualidade para que nossas crianças tenham sua autoestima, integridade e dignidade preservadas. Para tal, a aquisição do controle miccional, com consequente retirada das fraldas, deve acontecer de forma autônoma e natural, respeitando a individualidade e o protagonismo da criança em seu próprio processo. Sem treinos, pressão, comparações, premiações ou punições.',
    price: 'R$ 29,90',
    links: [{ label: 'Comprar agora', href: 'https://go.hotmart.com/N106487452U' }],
    image: '/ebook-desfralde-consciente.jpeg',
  },
  {
    slug: 'ebook-12',
    title: 'Nome do e-book 12',
    description: 'Descrição curta do e-book.',
    price: 'R$ 00,00',
  },
];
