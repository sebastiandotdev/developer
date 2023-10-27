import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      ice: '#E6EEFA',
      some: '#6C7A9C',
      sad: '#E9E9EB',
      aqua: '#5790DF',
      indigo: '#093D89',
    },
  },
  plugins: [],
}

export default config
