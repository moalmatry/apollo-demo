import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["@graphql-typed-document-node/core"],
  },
  server: {
    proxy: {
      "/IthmaarPortalDev/graphql": {
        target: "http://102.217.68.222:8083",
        changeOrigin: true,
        secure: false,
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq, req) => {
            proxyReq.setHeader("origin", "http://102.217.68.222:8083");
          });
        },
      },
    },
  },
});
