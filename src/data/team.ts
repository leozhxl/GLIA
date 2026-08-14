export interface TeamMember {
  name: string;
  role: string;
  credential: string;
  bio: string;
  image?: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Juliana Fernandes",
    role: "Fonoaudióloga Clínica Infantil",
    credential: "CRFa 3-12.801 · Especialista em Autismo",
    bio: "Atuação voltada ao desenvolvimento infantil, comunicação funcional e intervenção baseada em evidências. Pós-graduada em Comunicação Aumentativa e Alternativa (CAA) e Análise do Comportamento Aplicada (ABA), atua na avaliação funcional integrada de crianças com atrasos no desenvolvimento, Transtorno do Espectro Autista (TEA) e outras alterações da comunicação. Também é Perita Judicial em Fonoaudiologia.",
    image: "/equipe-juliana-fernandes.jpg",
  },
  {
    name: "Aline Paganini",
    role: "Psicóloga · Neuropsicóloga Infantil",
    credential:
      "Especialista em avaliação do desenvolvimento cognitivo, emocional e comportamental",
    bio: "Pós-graduada em ABA e Terapia Cognitivo-Comportamental (TCC), realiza avaliações psicológicas e neuropsicológicas utilizando instrumentos padronizados, como WISC e SON-R, contribuindo para diagnósticos mais precisos e para a elaboração de intervenções personalizadas.",
    image: "/equipe-aline-paganini.jpg",
  },
  {
    name: "Josiane Vargas",
    role: "Psicopedagoga · Neuropsicopedagoga · Terapeuta ABA",
    credential: "Mestre em Educação pela UFSC",
    bio: "Profissional dedicada à avaliação e ao desenvolvimento das habilidades cognitivas, acadêmicas e funcionais, com atuação voltada à aprendizagem, ao desenvolvimento e à promoção da autonomia. Atualmente, também é graduanda em Terapia Ocupacional, ampliando sua formação e integrando novos conhecimentos à prática clínica, com foco na autonomia, funcionalidade, aprendizagem e participação da criança nos diferentes contextos de vida. Sua atuação busca compreender cada criança de forma individualizada, considerando suas potencialidades, necessidades e os diferentes ambientes dos quais participa.",
    image: "/equipe-josiane-vargas.jpg",
  },
];
