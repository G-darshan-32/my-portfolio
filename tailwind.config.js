/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2dd4bf', // teal-400
          dark: '#14b8a6',  // teal-500
        },
        secondary: {
          light: '#34d399', // emerald-400
          dark: '#10b981',  // emerald-500
        },
        background: {
          light: '#f9fafb', // gray-50
          dark: '#111827',  // gray-900
        },
        surface: {
          light: '#ffffff', // white
          dark: '#1f2937',  // gray-800
        },
        text: {
          light: '#111827', // gray-900
          dark: '#f9fafb',  // gray-50
        }
      },
    },
  },
  plugins: [],
} 