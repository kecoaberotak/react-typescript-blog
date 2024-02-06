/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tosca': "#2cb786",
        'abu-gelap': '#322f2f',
      }
    },
  },
  plugins: [],
}

