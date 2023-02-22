import StyleDictionary from "style-dictionary";
import _ from "lodash";
import fs from "fs";
import config from "./config";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// filter out 'color', 'light', 'dark' & 'contrast' from name
StyleDictionary.registerTransform({
  name: "custom/transformName",
  type: "name",
  transformer: function (prop) {
    const filteredPath = prop.path.filter(
      (pathItem) =>
        ["color", "light", "dark", "contrast"].indexOf(pathItem) === -1
    );
    const name = filteredPath.join("-").replaceAll(" ", "_");

    return `--dui-windows-${name}`;
  },
});

StyleDictionary.registerFormat({
  name: "custom/format/merge-multiple-colors",
  formatter: _.template(
    fs.readFileSync(__dirname + "/templates/merge-multiple-colors.template", {
      encoding: "utf8",
    })
  ),
});

StyleDictionary.registerTransformGroup({
  name: "custom/json",
  transforms: StyleDictionary.transformGroup["web"].concat([
    // "custom/transformName",
  ]),
});

StyleDictionary.extend(config).buildAllPlatforms();
