import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Common Utils
      "@gql": path.resolve(__dirname, "./src/common/gql"),
      "@utils": path.resolve(__dirname, "./src/common/utils"),
      // UI
      "@atoms": path.resolve(__dirname, "./src/ui/atoms"),
      "@molecules": path.resolve(__dirname, "./src/ui/molecules"),
      "@organisms": path.resolve(__dirname, "./src/ui/organisms"),
      "@layouts": path.resolve(__dirname, "./src/ui/layouts"),
      "@pages": path.resolve(__dirname, "./src/ui/pages"),
      // Data & Hooks
      "@data": path.resolve(__dirname, "./src/data"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      // Root
      "@src": path.resolve(__dirname, "./src/"),
    },
  },
});
