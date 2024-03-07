// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Manually specify chunks if needed
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust as needed
  },
});
