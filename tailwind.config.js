// tailwind.config.js
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7da2a9", 
        secondary: "#f7f7f7",
      },
      // fontFamily: {
      //   sans: ['var(--font-inter)', 'sans-serif'],
      //   serif: ['var(--font-lora)', 'serif'],
      // },
    },
  },
  plugins: [],
};