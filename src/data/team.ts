export interface TeamMember {
  name: string;
  role: string;
  credential: string;
  image?: string;
}

export const TEAM: TeamMember[] = [
  {
    name: 'Juliana Fernandes',
    role: 'Fonoaudióloga Clínica Infantil',
    credential: 'Especialista em Autismo · TEA · ABA · CAA',
    image: '/equipe-josiane-vargas.jpg',
  },
  {
    name: 'Josiane Vargas',
    role: 'Psicopedagoga Infantil',
    credential: 'Neuropsicopedagoga · Aplicadora ABA · Mestra pela UFSC',
    image: '/equipe-juliana-fernandes.jpg',
  },
  {
    name: 'Aline Paganini',
    role: 'Psicóloga Infantil',
    credential: 'Neuropsicóloga Infantil · Pós-graduada em ABA/TCC',
    image: '/equipe-aline-paganini.jpg',
  },
];
