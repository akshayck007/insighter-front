// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-simple-maps": ["react-simple-maps"],
        },
      },
    },
    chunkSizeWarningLimit: 800, // Adjust as needed
  },
});
