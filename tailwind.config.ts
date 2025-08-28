import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}', // For Next.js pages
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // For reusable components
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',      // For App Router pages/layouts/components
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
        customBlue: '#54b1e5',
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        black : '.25rem .25rem 0 #000',
        white : '.25rem .25rem 0 #fff',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
    },
  },
  plugins: [],
} satisfies Config

