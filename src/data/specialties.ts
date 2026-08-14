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
    when: 'Atendimento de 2 a 16 anos e 11 meses. Indicada para dificuldades emocionais, comportamentais, sociais, questões familiares e relacionadas ao desenvolvimento.',
  },
  {
    icon: BrainCog,
    name: 'Neuropsicologia Infantil',
    short: 'Avaliação neuropsicológica com instrumentos padronizados (como WISC e SON-R), contribuindo para diagnósticos mais precisos.',
    when: 'Atendimento de 2 a 16 anos e 11 meses. Indicada em investigações como TDAH, TEA, dificuldades de aprendizagem e alterações no desenvolvimento cognitivo.',
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
