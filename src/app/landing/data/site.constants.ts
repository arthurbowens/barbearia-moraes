/** Moraes Barbearia — Balneário Camboriú · dados para o site (revise horários em feriados). */
export const SITE = {
  name: 'Moraes Barbearia',
  shortName: 'Moraes Barbearia',
  /** Nome curto no selo circular do header (vazio = não exibe linha extra) */
  logoWordmark: 'MORAES',
  logoSrc: '/imagens/logobarbearia.jpg',
  heroImageSrc: '/imagens/barbearia1.jpeg',
  city: 'Balneário Camboriú',
  state: 'SC',
  tagline:
    'Cabelo, barba e bigode no Centro de Balneário Camboriú — tradição de família desde 2007.',
  heroTitleLine1: 'Barbearia',
  heroTitleLine2: 'Moraes',
  description:
    'Especializada em cabelo, barba e bigode, com atendimento por ordem de chegada desde 2007 no Centro de Balneário Camboriú.',
  phoneDisplay: '(47) 99645-4658',
  phoneTel: '+5547996454658',
  whatsappUrl: 'https://wa.me/5547996454658',
  instagramUrl: 'https://www.instagram.com/barbeariamoraes/',
  mainUnitTitle: 'Moraes Barbearia — Centro',
  /** Abrir no Google Maps (app ou navegador) */
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+200%2C+118+-+Salas+01+e+02%2C+Centro%2C+88330-084+Balne%C3%A1rio+Cambori%C3%BA+SC',
  /** Iframe incorporado (mesmo endereço) */
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Rua+200%2C+118+-+Salas+01+e+02%2C+Centro%2C+Balne%C3%A1rio+Cambori%C3%BA+-+SC%2C+88330-084&z=17&hl=pt-BR&output=embed',
  address: {
    street: 'Rua 200, 118 — Salas 01 e 02 (esquina com a 3ª Avenida)',
    cityLine: 'Centro, Balneário Camboriú – SC',
    cep: '88330-084',
  },
  hoursWeekly: [
    { day: 'Seg – Sex', time: '8:30 – 20:00' },
    { day: 'Sáb', time: '8:30 – 18:00' },
    { day: 'Dom', time: 'Fechado' },
  ],
  /** Textos da seção “Sobre nós” (fonte: informações públicas / Google). */
  aboutParagraphs: [
    'A Moraes Barbearia é especializada em cabelo, barba e bigode. O atendimento é por ordem de chegada, com compromisso com o cliente desde 2007, no Centro de Balneário Camboriú.',
    'A casa foi fundada por Odemir Moraes, barbeiro que veio de Taió (SC) em 1983 para construir ofício e história na região — uma trajetória marcada por trabalho e respeito à profissão.',
    'Hoje, Djeimir P. Moraes, filho de Odemir, barbeiro e sócio, conduz a equipe levando do clássico ao moderno para quem exige qualidade na cadeira.',
  ],
} as const;

export const NAV_LEFT = [
  { label: 'INÍCIO', fragment: 'inicio' },
  { label: 'SOBRE NÓS', fragment: 'sobre' },
] as const;

export const NAV_RIGHT = [
  { label: 'SERVIÇOS', fragment: 'servicos' },
  { label: 'CONTATO', fragment: 'contato' },
] as const;

export const NAV_LINKS = [...NAV_LEFT, ...NAV_RIGHT] as const;
