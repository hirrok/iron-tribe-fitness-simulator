/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#070709',
          card: '#0F0F12',
          elevated: '#14141A',
          hover: '#1A1A22',
        },
        brand: {
          red: '#EF4444',
          'red-dark': '#DC2626',
          gold: '#F59E0B',
          green: '#10B981',
          blue: '#3B82F6',
          purple: '#8B5CF6',
        },
        border: {
          DEFAULT: '#1E1E28',
          bright: '#2A2A36',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        foundry: '10px',
        'foundry-sm': '6px',
      },
    },
  },
  plugins: [],
};
