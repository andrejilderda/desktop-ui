import themes from 'lib/themes/themes.css';

export default {
  windows: {
    toString: () => `.${themes.windows.light} &, .${themes.windows.dark} &`,
    light: `.${themes.windows.light} &`,
    dark: `.${themes.windows.dark} &`,
  },
  macos: `.${themes.macos.light} &, .${themes.macos.dark} &`,
};
