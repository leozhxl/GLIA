export const CLINIC = {
  fullName: 'GLIA · Centro Integrado de Desenvolvimento Infantil',
  phoneDisplay: '(48) 99653-7473',
  phoneHref: 'tel:+5548996537473',
  email: 'gliacentroclinico1@gmail.com',
  address: 'R. Antônio Simão, 87 · São José',
  city: 'Sombrio - SC · 88960-000',
  hours: 'Seg a Sex: 08h–18h',
  instagram: 'https://www.instagram.com/gliacentroclinico/',
  whatsapp: 'https://wa.me/5548996537473',
} as const;

export const whatsappLink = CLINIC.whatsapp;

export const NAV_LINKS = [
  { label: 'Início', href: '#top' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
] as const;

export function createWhatsAppLink(message?: string) {
  return message
    ? `${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`
    : CLINIC.whatsapp;
}
