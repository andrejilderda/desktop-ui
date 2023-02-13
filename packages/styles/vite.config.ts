import { defineConfig } from "vite";

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: ["src/style.css", "src/global.css"],
      name: "@desktop-ui/styles",
      fileName: "styles",
    },
  },
});
