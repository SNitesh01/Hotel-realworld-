module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins'
      },
      animation: {
        fadeIn: 'fadeIn 5s ease-in-out',
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': { transform: "translate(0, 0)", opacity: 0.1 },
          '20%': { opacity: 0 },
          '40%': { transform: "translate(-150%, 0%)" },
          '50%': { transform: "translate(150%, 0%)", opacity: 0 },
          '60%': { transform: "translate(0%, 0%)", opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
}
