import StyleDictionary from "style-dictionary";
import _ from "lodash";
import fs from "fs";
import config from "./config";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

StyleDictionary.registerFormat({
  name: "custom/format/merge-multiple-colors",
  formatter: _.template(
    fs.readFileSync(__dirname + "/templates/merge-multiple-colors.template", {
      encoding: "utf8",
    })
  ),
});

StyleDictionary.extend(config).buildAllPlatforms();
