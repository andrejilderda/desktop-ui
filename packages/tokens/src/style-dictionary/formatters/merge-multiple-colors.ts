import _ from "lodash";
import StyleDictionary from "style-dictionary";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const mergeMultipleColors = () => {
  StyleDictionary.registerFormat({
    name: "custom/format/merge-multiple-colors",
    formatter: _.template(
      fs.readFileSync(__dirname + "/templates/merge-multiple-colors.template", {
        encoding: "utf8",
      })
    ),
  });
};
