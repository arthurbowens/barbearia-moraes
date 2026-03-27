export interface ServiceItem {
  title: string;
  blurb?: string;
}

export interface Testimonial {
  author: string;
  quote: string;
  rating: number;
  /** Ex.: Guia local — exibido abaixo do nome quando existir */
  badge?: string;
}

/** Serviços principais — o que a maioria das barbearias oferece no dia a dia. */
export const SERVICES: ServiceItem[] = [
  {
    title: 'Corte masculino',
    blurb:
      'Do social ao degradê e ao clássico: máquina e tesoura com acabamento alinhado ao seu estilo.',
  },
  {
    title: 'Barba',
    blurb:
      'Aparada, desenhada ou barba feita com navalha e toalha quente, no capricho.',
  },
  {
    title: 'Sobrancelha',
    blurb: 'Design limpo e proporcional, valorizando o formato do rosto.',
  },
  {
    title: 'Corte + barba',
    blurb:
      'Combo completo para quem quer ir da cadeira já revisado — cabelo e barba no mesmo atendimento.',
  },
];

/** Críticas reais compartilhadas (Google). */
export const TESTIMONIALS: Testimonial[] = [
  {
    author: 'Sandro Novack',
    quote:
      'Já sou cliente desde quando era na Av. Brasil com a Rua 1.500. Excelência!!!',
    rating: 5,
  },
  {
    author: 'Carlos Alberto Serafim de Oliveira',
    quote: 'Excelente atendimento. Preço bom e barbeiros ágeis.',
    rating: 5,
    badge: 'Guia local',
  },
  {
    author: 'Yuri Anjos',
    quote:
      'Ótima barbearia: sempre fazem o corte que eu quero e adoro o resultado. O barbeiro Rafa sempre me atende — muito gente boa e super profissional. Gosto muito de cortar com ele.',
    rating: 5,
    badge: '13 avaliações no Google',
  },
  {
    author: 'Elivelton Silva',
    quote: 'Ambiente top, corte com preço justo. Sempre volto!',
    rating: 5,
  },
  {
    author: 'Tiago Oliveira (Gram Digi)',
    quote:
      'Pessoal gente boa. Ambiente alto astral. Preços justos com serviço de qualidade.',
    rating: 5,
    badge: 'Guia local',
  },
  {
    author: 'Wagner T. R.',
    quote:
      'O atendimento é excelente, humanizado, e os barbeiros são muito bons a preço justo. Especial referência ao Jânio, que sempre dá aquele trato na peruca.',
    rating: 5,
  },
];

/** Destaques institucionais (história e operação). */
export const STATS = [
  { value: '2007', label: 'No Centro de Balneário Camboriú' },
  { value: 'Ordem', label: 'Atendimento por chegada' },
  { value: '1983', label: 'Odemir Moraes na região' },
  { value: '2ª geração', label: 'Djeimir P. Moraes · sócio' },
] as const;
