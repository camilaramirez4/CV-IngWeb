import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'baby-blue': '#b5c1ff',
        'medium-blue': '#a1b1ff',
        'main-text': '#2b2b2b',
        'secondary-text': '#767676',
        'available-green': '#7EB942',
        'light-gray': '#f0f0f6',
        'medium-gray': '#f5f5f5'
      },
    },
  },
  plugins: [],
}
export default config
