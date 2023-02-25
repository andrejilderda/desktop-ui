// The whitelisted classes below will NEVER be transformed into scoped names,
// since these are global CSS-classes set by a theme that components rely on.

const whitelistedClasses = [
  "windows",
  "macos",
  "dui-theme",
  "dui-light",
  "dui-dark",
];

const getCssModulesConfig = (scopeType, path) => {
  return {
    generateScopedName: (name, filename, css) => {
      // getJSON(cssFileName, json, outputFileName) {
      //   // maybe we want to generate a JSON-file with the CSS-module names for
      //   // documentation purposes in the future?
      //
      //   if (scopeType === "global") return;
      //   const cssFileNameWithoutExtension = cssFileName.replace(
      //     /\.module\.css$/,
      //     ""
      //   );
      //   const jsonFileName = `${cssFileNameWithoutExtension}.json`;
      //   fs.writeFileSync(path.join(jsonFileName), JSON.stringify(json));
      // },

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
  };
};

module.exports = { getCssModulesConfig };
