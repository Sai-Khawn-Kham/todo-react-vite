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
        y: {
          '0%,100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(80px)',
          }
        },
        x: {
          '0%,100%': {
            transform: 'translateX(0px)',
          },
          '50%': {
            transform: 'translateX(80px)',
          }
        },
      },
      animation: {
        y: "y 5s linear infinite",
        x: "x 5s linear infinite",
      },
    },
  },
  plugins: [],
}

