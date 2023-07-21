/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:'#0F1829',
        secondary:'#D0E7E5',
        third:'#28847F',
        nav:'rgba(248, 248, 248, 0.452)'
},
    },
  },
  plugins: [],
}
