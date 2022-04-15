import { componentName } from './../index.css';
import { themeUtils, createUtils } from 'lib/utils';

const { theme, tokens } = themeUtils('windows', componentName);
const { setVars } = createUtils(componentName);


export const root = theme({
  vars: {
    ...setVars`
      --size: 20px,
      --border-width: ${tokens.borderWidths.default},
      --border-radius: ${tokens.radii[1]},
    `,
  },

  colors: (c) => ({
    '--text': c.fill_color.text.primary,
  }),
});

export const wrapperVariants = theme({
  colors: (c) => ({
    '--text-disabled': c.fill_color.text.disabled,
  }),
});
