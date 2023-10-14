import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src/"),
      "@gql": path.resolve(__dirname, "./src/common/gql"),
      "@utils": path.resolve(__dirname, "./src/common/utils"),
      "@components": path.resolve(__dirname, "./src/ui/components"),
      "@layouts": path.resolve(__dirname, "./src/ui/layouts"),
      "@pages": path.resolve(__dirname, "./src/ui/pages"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
});
