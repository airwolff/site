import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // For reusable components
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',      // For App Router pages/layouts/components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

