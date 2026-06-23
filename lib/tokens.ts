// lib/tokens.ts — import in every component
export const colors = {
  navy: '#0F172A',
  navyDeep: '#020617',
  gold: '#D4AF37',
  goldLight: '#F4D87A',
  white: '#FFFFFF',
  slate50: '#F8FAFC',
  slate200: '#E2E8F0',
  slate400: '#94A3B8',
  slate700: '#334155',
}
export const shadows = {
  card: '0 4px 24px rgba(15,23,42,0.07)',
  cardHover: '0 16px 48px rgba(15,23,42,0.14)',
  gold: '0 0 24px rgba(212,175,55,0.25)',
}
export const transitions = {
  spring: { type: 'spring', stiffness: 300, damping: 30 },
  ease: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
}
