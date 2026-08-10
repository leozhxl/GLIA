import {
  Ear,
  Brain,
  BrainCog,
  GraduationCap,
  Sparkles,
  Hand,
  type LucideIcon,
} from 'lucide-react';

export interface Specialty {
  icon: LucideIcon;
  name: string;
  short: string;
  when: string;
}

export const SPECIALTIES: Specialty[] = [
  {
    icon: Ear,
    name: 'Fonoaudiologia',
    short: 'Comunicação, linguagem, fala, alimentação, motricidade orofacial e comunicação alternativa — atendimento desde os primeiros meses de vida.',
    when: 'Atendimento de 0 a 15 anos. Procurar quando há atraso na fala, dificuldade de articulação, seletividade alimentar ou dificuldade para mastigar/engolir.',
  },
  {
    icon: Brain,
    name: 'Psicologia',
    short: 'Avaliação e acompanhamento psicológico do desenvolvimento emocional, comportamental e social da criança e da família.',
    when: 'Atendimento de 2 a 15 anos. Indicada para ansiedade, medos intensos, mudanças familiares, agressividade ou retraimento social.',
  },
  {
    icon: BrainCog,
    name: 'Neuropsicologia Infantil',
    short: 'Avaliação neuropsicológica com instrumentos padronizados (como WISC e SON-R), contribuindo para diagnósticos mais precisos.',
    when: 'Atendimento de 2 a 15 anos. Necessária quando se investiga TDAH, dificuldades de atenção, memória ou aprendizagem.',
  },
  {
    icon: GraduationCap,
    name: 'Psicopedagogia',
    short: 'Desenvolvimento das habilidades de aprendizagem, atenção, funções executivas e desempenho escolar.',
    when: 'Atendimento de 2 a 15 anos. Para dificuldades com leitura, escrita, matemática ou desempenho escolar.',
  },
  {
    icon: Sparkles,
    name: 'Terapia ABA',
    short: 'Intervenção baseada em evidências, promovendo habilidades de comunicação, comportamento, autonomia e interação social.',
    when: 'Atendimento de 2 a 15 anos. Indicada para crianças no espectro autista (TEA) ou com comportamentos que afetam o dia a dia.',
  },
  {
    icon: Hand,
    name: 'Terapia Ocupacional',
    short: 'Desenvolvimento sensorial, motor, funcional e da independência nas atividades do dia a dia.',
    when: 'Atendimento de 2 a 15 anos. Indicada para alterações sensoriais, dificuldades motoras e de autonomia nas rotinas.',
  },
];
