import { es6ColorVariables } from "./es6-color-variables";
import { mergeMultipleColors } from "./merge-multiple-colors";

export default function registerFormatters() {
  es6ColorVariables();
  mergeMultipleColors();
}
