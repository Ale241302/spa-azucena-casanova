import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spa-primary': {
          DEFAULT: '#34abb1',
          light: '#5bbcc1',
          dark: '#2a8a8f',
        },
        'spa-pink': {
          DEFAULT: '#f96391',
          light: '#fb8aad',
          dark: '#e04a7a',
        },
        'spa-bg': {
          DEFAULT: '#fff0fc',
          light: '#fff5fe',
        },
        'spa-black': {
          DEFAULT: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

