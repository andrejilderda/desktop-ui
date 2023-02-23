import StyleDictionary, { TransformedToken } from "style-dictionary";
import tinycolor from "tinycolor2";

// This is a custom transform that converts a shadow token into a CSS box-shadow

const toPx = (value: TransformedToken["value"]): `${number}` | `${number}px` =>
  value !== 0 ? `${value}px` : "0";

const shadowMatcher = (prop: TransformedToken) => prop.type === "custom-shadow";

const webShadowTransformer = (prop: TransformedToken) => {
  const { radius, color, offsetX, offsetY, spread } = prop.original.value;

  return `${toPx(offsetX)} ${toPx(offsetY)} ${toPx(radius)} ${toPx(
    spread
  )} ${tinycolor(color).toRgbString()}`;
};

export const registerTransformShadows = () =>
  StyleDictionary.registerTransform({
    name: "shadow/css",
    matcher: shadowMatcher,
    transformer: webShadowTransformer,
    type: "value",
  });
