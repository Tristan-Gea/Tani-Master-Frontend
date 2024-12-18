import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['smooth']
    },
  },
  darkMod: "class",
  plugins: [nextui()],
} 