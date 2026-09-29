import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    proxy: {
      '/proxy-img': {
        target: 'https://images.pokemontcg.io',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/proxy-img/, ''),
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@vca/three-slab": path.resolve(__dirname, "../../packages/three-slab/src"),
      three: path.resolve(__dirname, "../../node_modules/three"),
    },
    dedupe: ["three", "react", "react-dom"],
  },
  // Expose both VITE_* (Vite default) and EXPO_PUBLIC_* (Rork's cross-platform
  // public-env convention, written by tools like getOrCreateAuthConfig).
  envPrefix: ["VITE_", "EXPO_PUBLIC_"],
}));
