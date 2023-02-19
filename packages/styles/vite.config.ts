import { defineConfig, loadEnv } from "vite";
import glob from "glob";
import path from "node:path";
import { fileURLToPath } from "node:url";

// This config is used for building both the scoped and unscoped CSS-library. By
// default, the CSS-library will be built with scoped names (parsed by
// CSS-modules). To build the unscoped CSS-library, run:
// `vite build --mode global`.

// The whitelisted classes below will NEVER be transformed into scoped names,
// since these are global CSS-classes set by a theme that components rely on.

const whitelistedClasses = [
  "windows",
  "macos",
  "dui-theme",
  "dui-light",
  "dui-dark",
];

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
            const fileName =
              scopeType === "global" ? name?.replace(/\.module/g, "") : name;
            const folderName = `${name?.replace(/(\.module)*.css/g, "")}`;

            // put CSS files in the same directory as their js-files (for modules)
            return `${scopeType}/${folderName}/${fileName}`;
          },
        },
      },
    },
    css: {
      modules: {
        getJSON(cssFileName, json, outputFileName) {
          // maybe we want to generate a JSON-file with the CSS-module names for
          // documentation purposes in the future?
          //
          // if (scopeType === "global") return;
          // const cssFileNameWithoutExtension = cssFileName.replace(
          //   /\.module\.css$/,
          //   ""
          // );
          // const jsonFileName = `${cssFileNameWithoutExtension}.json`;
          // fs.writeFileSync(path.join(jsonFileName), JSON.stringify(json));
        },
        generateScopedName(name, filename, css) {
          // if we're building the global CSS-library, we just use the original name
          if (scopeType === "global") return name;

          const i = css.indexOf("." + name);
          const line = css.substr(0, i).split(/[\r\n]/).length;
          const file = path.basename(filename, ".module.css");
          const scopedName = "_" + file + "_" + line + "_" + name;

          // if the class is whitelisted, use the original name (meaning the
          // global name, f.e. for theme & light/dark classes)
          return whitelistedClasses.includes(name) ? name : scopedName;
        },
      },
    },
  };
});
