import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api":
        "https://backend-ecommerce-oa41deg0k-nirbhays-projects-2655d493.vercel.app",
    },
  },
});
