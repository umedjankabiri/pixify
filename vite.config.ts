import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, "src/app"),
      common: path.resolve(__dirname, "src/common"),
      features: path.resolve(__dirname, "src/features"),
    },
  },
});
