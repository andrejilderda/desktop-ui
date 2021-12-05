import light from "./light";
import lightBlur from "./lightBlur";
import dark from "./dark";
import darkBlur from "./darkBlur";

export default {
  light: {
    default: light,
    blur: lightBlur,
  },
  dark: {
    default: dark,
    blur: darkBlur,
  },
};
