// Windows elevation mixin
// https://learn.microsoft.com/en-us/windows/apps/design/signature-experiences/layering

// Usage:
// .elevation-1 {
//   @include windows-elevation(1);
// }
//
// Possible values:
// 0 / 2 / 8 / 16 / 32 / 128;

// TODO: Save in tokens using style-dictionary
// https://github.com/amzn/style-dictionary/issues/456#issuecomment-822827352
const shadows = {
  light: {
    cardRest: "0 2px 4px rgba(0, 0, 0, 0.04)",
    tooltip: "0 4px 8px rgba(0, 0, 0, 0.14)",
    flyout: "0 8px 16px rgba(0, 0, 0, 0.14)",
    dialog: "0 32px 64px rgba(0, 0, 0, 0.19), 0 2px 21px rgba(0, 0, 0, 0.15)",
  },
  dark: {
    cardRest: "0 2px 4px rgba(0, 0, 0, 0.13)",
    tooltip: "0 4px 8px rgba(0, 0, 0, 0.26)",
    flyout: "0 8px 16px rgba(0, 0, 0, 0.26)",
    dialog: "0 32px 64px rgba(0, 0, 0, 0.37), 0 2px 21px rgba(0, 0, 0, 0.37)",
  },
};

module.exports = function (mixin, elevation) {
  const elevationValues = [0, 2, 8, 16, 32, 128];
  elevation = parseInt(elevation, 10);

  if (typeof elevation !== "number") {
    throw new Error("mixin must be a number");
  }

  switch (elevation) {
    case 0:
      return {
        "&": {
          boxShadow:
            "inset 0 0 0 1px var(--dui-windows-stroke_color-card_stroke-default)",
        },
      };
    case 2:
      return {
        "&": {
          boxShadow: `inset 0 -1px 0 0 var(--dui-windows-stroke_color-control_stroke-secondary), 
              inset 0 0 0 1px var(--dui-windows-stroke_color-card_stroke-default)`,
        },
      };
    case 8:
      return {
        "&": {
          boxShadow: `0 0 0 1px var(--dui-windows-stroke_color-surface_stroke-flyout), ${shadows.light.cardRest}`,
        },
      };
    case 16:
      return {
        "&": {
          boxShadow: `0 0 0 1px var(--dui-windows-stroke_color-surface_stroke-flyout), ${shadows.light.tooltip}`,
        },
      };
    case 32:
      return {
        "&": {
          boxShadow: `0 0 0 1px var(--dui-windows-stroke_color-surface_stroke-flyout), ${shadows.light.flyout}`,
        },
      };
    case 128:
      return {
        "&": {
          boxShadow: `0 0 0 1px var(--dui-windows-stroke_color-surface_stroke-flyout), ${shadows.light.dialog}`,
        },
      };
    default:
      throw new Error(
        `elevation must be one of the following values: ${elevationValues.join(
          ", "
        )}`
      );
  }
};
