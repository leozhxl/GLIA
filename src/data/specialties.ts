import {
  Ear,
  Brain,
  BrainCog,
  GraduationCap,
  Puzzle,
  Sparkles,
  Apple,
  Stethoscope,
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
    short: 'Linguagem, fala, audição e motricidade oral — para crianças com atraso de fala, dificuldades de articulação ou desafios na alimentação.',
    when: 'Procurar quando há atraso na fala, dificuldade de articulação, trocas de sons ou problemas para mastigar/engolir.',
  },
  {
    icon: Brain,
    name: 'Psicologia',
    short: 'Apoio emocional e comportamental para crianças e famílias — ansiedade, medos, dificuldades de socialização e luto.',
    when: 'Indicada para ansiedade, medos intensos, mudanças familiares, agressividade ou retraimento social.',
  },
  {
    icon: BrainCog,
    name: 'Neuropsicologia',
    short: 'Avaliação das funções cognitivas — memória, atenção, funções executivas — com laudos detalhados para diagnóstico preciso.',
    when: 'Necessária quando se investiga TDAH, dificuldades de atenção, memória ou aprendizagem com causa neurológica.',
  },
  {
    icon: GraduationCap,
    name: 'Psicopedagogia',
    short: 'Dificuldades de aprendizagem — leitura, escrita, raciocínio — com estratégias que aproximam a criança do prazer de aprender.',
    when: 'Quando a criança tem dificuldade com leitura, escrita ou matemática, ou evita tarefas escolares.',
  },
  {
    icon: Puzzle,
    name: 'Neuropsicopedagogia',
    short: 'Une cognição e pedagogia: avalia e intervém nas aprendizagens considerando o funcionamento cerebral de cada criança.',
    when: 'Para casos em que dificuldades escolares se combinam com questões cognitivas e de processamento.',
  },
  {
    icon: Sparkles,
    name: 'Terapia ABA',
    short: 'Análise aplicada do comportamento — ensino estruturado de habilidades sociais, comunicação e autonomia, especialmente no TEA.',
    when: 'Indicada para crianças no espectro autista (TEA) ou com comportamentos desafiadores que afetam o dia a dia.',
  },
  {
    icon: Apple,
    name: 'Nutrição',
    short: 'Alimentação saudável na infância — seletividade alimentar, transição alimentar, deficiências e orientação para TEA e TDAH.',
    when: 'Para seletividade alimentar, ganho/peso inadequado, alergias ou necessidade de suplementação.',
  },
  {
    icon: Stethoscope,
    name: 'Pediatria',
    short: 'Acompanhamento do crescimento e desenvolvimento — visão médica integrada com todos os demais especialistas da clínica.',
    when: 'Para acompanhamento de rotina, encaminhamentos e visão clínica geral do desenvolvimento do seu filho.',
  },
];