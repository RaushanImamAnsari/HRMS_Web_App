/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        slateBlue: "#1e2a4a",
        accent: "#4f46e5"
      }
    }
  },
  plugins: []
};
