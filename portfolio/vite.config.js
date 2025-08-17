import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import prettierConfig from "./prettier.config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), prettierConfig()],
});
