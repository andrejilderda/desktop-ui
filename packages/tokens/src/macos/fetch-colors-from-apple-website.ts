// Warning:
// don't use console.log in this file, it will be used as args to merge-macos-color-tokens.ts

import fetch from "node-fetch";
import jsdom from "jsdom";
import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const [_, __, ...args] = process.argv;

const fallbackDir = path.join(__dirname, `${args[0]}/fallback`);
const macosSystemColorsFileName = "macos-system-colors.generated.json";

const dryRun = args[1];

const returnValue = (message: string, colors) => {
  return dryRun
    ? console.log(message)
    : console.log(JSON.stringify(colors, null, 2));
};

const getValuesFromTable = (table: HTMLTableElement) => {
  const allValues = Array.from(table.querySelectorAll("tbody tr")).map(
    (row) => {
      const cells = Array.from(row.querySelectorAll("td"));
      const name = cells[cells.length - 1].textContent;
      const swatches = Array.from(row.querySelectorAll(".swatch-color"));
      const lightSwatch = swatches[0];
      const darkSwatch = swatches[1];

      return {
        name,
        light: getRgbValue(lightSwatch),
        dark: getRgbValue(darkSwatch),
      };
    }
  );

  // sorted by light/dark
  return allValues.reduce(
    (acc, { name, light, dark }) => {
      acc.light[name] = { value: light };
      acc.dark[name] = { value: dark };
      return acc;
    },
    { light: {}, dark: {} }
  );
};

const getRgbValue = ($swatch) => {
  const values = $swatch.textContent
    .split("\n")
    .map((item) => item.replaceAll(/[RGB]/g, "").trim())
    .filter(Boolean)
    .join(", ");

  return `rgb(${values})`;
};

async function fetchColors() {
  let document: Document;

  const url =
    "https://developer.apple.com/design/human-interface-guidelines/foundations/color";
  const res = await fetch(url);

  const html = await res.text();
  const dom = new jsdom.JSDOM(html);
  document = dom.window.document;

  const tables: HTMLTableElement[] = Array.from(
    document.querySelectorAll(".macos-system-color-gallery li table")
  );

  if (!tables.length) throw new Error(`No tables with colors found on ${url}.`);

  const colorObj = tables.reduce((acc, table, index) => {
    const keyMap = ["default", "vibrant", "accessible", "accessible-vibrant"];
    const key = keyMap[index];
    const values = getValuesFromTable(table);

    const namePrefix = key === "default" ? "" : `${key}-`;
    acc[`${namePrefix}light`] = values["light"];
    acc[`${namePrefix}dark`] = values["dark"];

    return acc;
  }, {});

  return colorObj;
}

const saveToFile = (colors) => {
  const path = `${fallbackDir}/${macosSystemColorsFileName}`;
  const content = JSON.stringify(colors, null, 2);

  try {
    if (content)
      fs.writeFileSync(path, content, { encoding: "utf8", flag: "w" });
  } catch (err) {
    throw err;
  }
};

try {
  const colorPalettes = await fetchColors();

  if (!dryRun) saveToFile(colorPalettes);

  returnValue(
    `💾 Successfully fetched colors from Apple website. Saved to '${fallbackDir}/${macosSystemColorsFileName}'`,
    colorPalettes
  );
} catch (err) {
  // when the website is down or changed, use the previously fetched fallback
  const colorFallback = fs.readFileSync(
    `${fallbackDir}/fallback/${macosSystemColorsFileName}`,
    "utf8"
  );

  returnValue(
    `🛟 ${err} Falling back to previously fetched colors.`,
    JSON.parse(colorFallback)
  );
}
