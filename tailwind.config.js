/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'medical-primary': '#0f172a',
        'medical-accent': '#00c9b1',
        'medical-bg': '#08111a',
        'medical-card': '#1a2c3d',
        'anatomy': '#ef4444',
        'physiology': '#8b5cf6',
        'pharmacology': '#10b981',
        'pathology': '#3b82f6',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 201, 177, 0.4)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 201, 177, 0.8)' },
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
