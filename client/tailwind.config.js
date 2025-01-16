/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensure Tailwind purges unused styles from all your files
    "./node_modules/daisyui/dist/**/*.js" // DaisyUI components
  ],
  theme: {
    extend: {
      animation: {
        "gradient-pulse": "gradientPulse 3s infinite ease-in-out",
        fadeIn: "fadeIn 1.5s ease-in-out forwards"
      },
      keyframes: {
        gradientPulse: {
          "0%": {
            backgroundPosition: "0% 50%"
          },
          "50%": {
            backgroundPosition: "100% 50%"
          },
          "100%": {
            backgroundPosition: "0% 50%"
          }
        },
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      }
    }
  },
  plugins: [daisyui]
};
