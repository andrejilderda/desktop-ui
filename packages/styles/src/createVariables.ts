import { flatto } from "@alizeait/flatto";
import { colors as colorTokens } from "./tokens/windows/colors";

const reduceObj = (
  obj: Record<string, any>,
  cb: (key: string, value: string) => Record<string, string>
) =>
  Object.keys(obj).reduce(
    (acc, key) => Object.assign(acc, cb(key, obj[key])),
    {}
  );

const toCSSVar = (key: string, value: string) => ({
  [`--dui-windows-light-${key}`]: value,
});

const flat = (obj: Record<string, any>) =>
  flatto(obj, "-") as unknown as Record<string, string>;
console.log(flat(colorTokens.base));
console.log("foo", reduceObj(flat(colorTokens.base), toCSSVar));

const colors = {
  // base: reduceObj(flat(colorTokens.base), toCSSVar),
  light: reduceObj(flat(colorTokens.light), toCSSVar),
  // dark: reduceObj(flat(colorTokens.dark), toCSSVar),
};
console.log(colors);
