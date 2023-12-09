import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@styles": "/src/styles",
      "@components": "/src/components",
      "@services": "/src/services",
      "@utils": "/src/utils",
      "@images": "/src/assets/images",
    },
  },
});
