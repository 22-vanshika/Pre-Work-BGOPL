/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-main": "url('/bg3.png')",
        "quiz-bg" : "url('https://i.pinimg.com/564x/1a/e9/02/1ae9025530ce4e921c5debc43050802e.jpg')",
        "quiz" : "radial-gradient(circle, rgba(71,36,22,1) 2%, rgba(61,31,18,1) 12%, rgba(24,10,5,1) 100%)",

        // "radial" :"url('radial-gradient(circle, rgba(32,18,10,1) 0%, rgba(54,26,15,1) 89%)')"
      },
      screens: {
        xs: "300px",
      },
    },
  },
  plugins: [],
}