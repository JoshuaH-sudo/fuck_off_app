import type { Config } from 'tailwindcss'
import { blackA, mauve, violet } from '@radix-ui/colors';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...mauve,
        ...violet,
      },
    },
  },

  plugins: [],
} satisfies Config

