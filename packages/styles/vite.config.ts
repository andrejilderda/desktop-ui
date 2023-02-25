import { defineConfig, loadEnv } from "vite";
import { getCssModulesConfig } from "@desktop-ui/vite-config";
import glob from "glob";
import path from "node:path";
import { fileURLToPath } from "node:url";

// This config is used for building both the scoped and unscoped CSS-library. By
// default, the CSS-library will be built with scoped names (parsed by
// CSS-modules). To build the unscoped CSS-library, run:
// `vite build --mode global`.

export default defineConfig(({ mode }) => {
  // merge .env files into process.env (if any)
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const scopeType: "global" | "module" =
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    (process.env.VITE_APP_SCOPE as "module" | undefined) || "global";

  const relativeFilePaths = [...glob.sync("src/**/*.css")]
    // exclude files that start with an underscore (like Sass does)
    .filter((path) => !path.includes("_"));

  const input = Object.fromEntries(
    relativeFilePaths.map((file) => [
      `${scopeType}/${path.relative(
        "src",
        file.slice(0, file.length - path.extname(file).length)
      )}`,
      fileURLToPath(new URL(file, import.meta.url)),
    ])
  );

  return {
    build: {
      emptyOutDir: false,
      cssCodeSplit: true,
      lib: {
        entry: relativeFilePaths,
        name: "@desktop-ui/styles",
      },
      rollupOptions: {
        input,
        output: {
          assetFileNames: ({ name }) => {
            const fileName = name;
            // scopeType === "global" ? name?.replace(/\.module/g, "") : name;
            const folderName = `${name?.replace(/(\.module)*.css/g, "")}`;

            // put CSS files in the same directory as their js-files (for modules)
            return `${scopeType}/${folderName}/${fileName}`;
          },
        },
      },
    },
    css: {
      modules: {
        ...getCssModulesConfig(scopeType, path),
      },
    },
  };
});
