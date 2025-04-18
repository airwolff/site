import { Outfit } from 'next/'
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // For reusable components
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',      // For App Router pages/layouts/components
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        
      }
    },
  },
  plugins: [],
} satisfies Config

