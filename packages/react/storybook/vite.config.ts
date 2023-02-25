import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { getCssModulesConfig } from "@desktop-ui/vite-config/get-css-modules-config";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      ...getCssModulesConfig("modules", path),
    },
  },
});
