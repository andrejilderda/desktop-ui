import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// get variable passed from cli
const [_, __, ...args] = process.argv;

const [
  macosSystemColorsLight,
  macosSystemColorsDark,
  macosSystemColorPalettesRaw,
  tokensDir,
] = args;

const outputDir = path.join(__dirname, tokensDir);
const macosSystemColorPalettes = JSON.parse(macosSystemColorPalettesRaw);

// returns the correct format for Style Dictionary: { [key]: {value: string} }
// + filters out the system colors (since we use those from the palettes)
const transformSystemColors = (colors) => {
  const lines = colors.split("\n").map((item) => item.split(": "));

  return lines.reduce((acc, [key, value]) => {
    // filter out the system colors since we use those from the palettes
    if (key.startsWith("system")) return acc;

    acc[key] = { value };
    return acc;
  }, {});
};

const systemColorsLight = transformSystemColors(macosSystemColorsLight);
const systemColorsDark = transformSystemColors(macosSystemColorsDark);

// merge the system colors with the palettes
const colors = Object.keys(macosSystemColorPalettes).reduce((acc, key) => {
  const systemColors = key.includes("dark")
    ? systemColorsDark
    : systemColorsLight;

  acc[key] = {
    ...systemColors,
    ...macosSystemColorPalettes[key],
  };
  return acc;
}, {});

const returnValue = JSON.stringify({ color: colors }, null, 2);

try {
  fs.writeFileSync(
    `${outputDir}/macos-color-tokens.generated.json`,
    returnValue,
    { encoding: "utf8", flag: "w" }
  );

  console.log(
    `💾 The file has been saved to ${outputDir}/macos-color-tokens.generated.json`
  );
} catch (err) {
  throw err;
}
