module.exports = {
  content: [
    "./index.html",
    "./birds.html",
    "./games/crush/index.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'angry-birds': ['angry-birds', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}