import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/", // se estiver em subcaminho, troque p/ "/subcaminho/"
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      "sites-betenvios.kl5dxx.easypanel.host",
      "conectastartup.com.br"
    ],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
}));
