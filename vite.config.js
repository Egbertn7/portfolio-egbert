import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolioku",  // Pastikan ini sesuai dengan URL GitHub Pages Anda
  plugins: [react()],
  build: {
    outDir: 'build',  // Mengubah output build ke folder 'build'
  },
});
