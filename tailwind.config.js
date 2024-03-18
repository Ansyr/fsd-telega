/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dark:{
        backgroundColor: '#212121'
      },
      light:{

      },
      colors:{
        primary:{
          shade: "rgb(123,113,198)",
          primaryText:  "rgb(135, 116, 225)"
        }
      }
    },
  },
  plugins: [],
  darkMode: ['variant', [
    '@media (prefers-color-scheme: dark) { &:not(.light *) }',
    '&:is(.dark *)',
  ]],
};
