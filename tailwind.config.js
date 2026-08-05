/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Glia brand palette — cinza neutro (texto, base da marca)
        glia: {
          50: '#f7f8f8',
          100: '#edeff0',
          200: '#d3d7d9',
          300: '#b0b6b9',
          400: '#888f93',
          500: '#676f73',
          600: '#4e5559',
          700: '#3b4144',
          800: '#292e30',
          900: '#191c1e',
          950: '#0d0f10',
        },
        sand: {
          // Base clara com leve viés de teal — acolhedora, clínica
          50: '#fafcfb',
          100: '#f1f6f4',
          200: '#e1ebe8',
          300: '#c9dad4',
          400: '#a9c1b9',
          500: '#8ca79c',
          600: '#708c81',
          700: '#576d64',
          800: '#3f4f48',
          900: '#2a3530',
        },
        coral: {
          // Teal da marca GLIA — CTAs e destaques principais
          50: '#eefaf7',
          100: '#d2f2ea',
          200: '#a6e4d6',
          300: '#78d4c0',
          400: '#52c4ac',
          500: '#3fb69c',
          600: '#329480',
          700: '#297567',
          800: '#20584c',
          900: '#163d35',
          950: '#0d2721',
        },
        sun: {
          // Dourado — acentos secundários e calor humano
          50: '#fffbea',
          100: '#fdf3c7',
          200: '#fae49c',
          300: '#f5d06e',
          400: '#e8ba45',
          500: '#d4af37',
          600: '#b08a22',
          700: '#8c6b1c',
          800: '#664e15',
          900: '#47380f',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        blob: '42% 58% 63% 37% / 41% 44% 56% 59%',
      },
      animation: {
        'blob-morph': 'blob-morph 12s ease-in-out infinite',
        'blob-morph-slow': 'blob-morph 18s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.6s ease-out both',
        'accordion-down': 'accordion-down 0.3s ease-out',
      },
      keyframes: {
        'blob-morph': {
          '0%, 100%': { borderRadius: '42% 58% 63% 37% / 41% 44% 56% 59%' },
          '50%': { borderRadius: '58% 42% 37% 63% / 59% 56% 44% 41%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'accordion-down': {
          '0%': { height: '0', opacity: '0' },
          '100%': { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
