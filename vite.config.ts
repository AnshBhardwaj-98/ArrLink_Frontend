import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import blogMarkdown from "./scripts/blog-markdown";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      "viral-salami-thimble.ngrok-free.dev",
    ],
    hmr: {
      overlay: false,
    },
  },
  plugins: [blogMarkdown(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});