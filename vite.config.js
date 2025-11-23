import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(),react()],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  extend: {
    colors: {
      customPurple: '#9663E926',
    },
  },
},

});
