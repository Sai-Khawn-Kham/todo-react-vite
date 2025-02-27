/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        customOne: '0 25px 45px 12px',
      },
      boxShadowColor: {
        colorOne: "rgba(0,0,0,0.5)"
      },
      borderColor: {
        customOne: "rgba(200,200,200,0.5)",
        customTwo: "rgba(200,200,200,0.2)",
      },
      colors: {
        customOne: "rgb(255,255,255,0.2)",
      },
      keyframes: {
        upDown: {
          '0%,100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(80px)',
          }
        }
      },
      animation: {
        upDown: "upDown 5s linear infinite",
      },
      transitionDelay: {
        '2000': "2000ms",
        '3000': "3000ms",
        '4000': "4000ms",
        '5000': "5000ms",
      }
    },
  },
  plugins: [],
}

