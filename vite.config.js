import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
/* import babel from '@rolldown/plugin-babel' */
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    /* babel({ presets: [reactCompilerPreset()] }) */
  ],
  server: {
    open: true,
    proxy: {
      "/api": {
        target: "http://apiclient.besoccerapps.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
