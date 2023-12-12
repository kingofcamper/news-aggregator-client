import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    server: {
      host: "0.0.0.0",
      port: 3000,
      watch: {
        usePolling: true,
      },
    },
    resolve: {
      alias: {
        "@": "/src",
        "@styles": "/src/styles",
        "@contexts": "/src/contexts",
        "@components": "/src/components",
        "@services": "/src/services",
        "@utils": "/src/utils",
        "@images": "/src/assets/images",
      },
    },
  });
};
