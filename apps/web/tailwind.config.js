/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',

    // Include monorepo structure for apps and packages
    '../../apps/web/app/**/*.{ts,tsx,js,jsx}',
    '../../apps/mobile/**/*.{ts,tsx,js,jsx}',

    '../../packages/ui/**/*.{ts,tsx,js,jsx}',
    '../../packages/app/**/*.{ts,tsx,js,jsx}',
    '../../packages/hooks/**/*.{ts,tsx,js,jsx}',
    '../../packages/libs/**/*.{ts,tsx,js,jsx}',
  ],
  darkMode: 'class',
  safelist: [
    'bg-fed-purple',
    'bg-fed-blue',
    'bg-fed-pink',
    'bg-fed-glow',
    'text-fed-purple',
    'text-fed-pink',
    'shadow-glow',
  ],
  theme: {
    extend: {
      colors: {
        fed: {
          base: '#1b002b',
          purple: '#3a004d',
          blue: '#001f3f',
          pink: '#ff66c4',
          glow: '#ff33aa',
        },
      },
      boxShadow: {
        glow: '0 0 15px rgba(255, 102, 196, 0.5)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        fluid: 'clamp(1rem, 2vw, 3rem)',
      },
      typography: (theme) => ({
        fed: {
          css: {
            color: theme('colors.gray.300'),
            a: { color: theme('colors.fed.pink') },
            strong: { color: theme('colors.white') },
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            code: { color: theme('colors.fed.pink') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate'),

    // Optional: register a prose-fed variant if you want it
    function ({ addVariant }) {
      addVariant('fed', '&.prose-fed')
    },
  ],
}
