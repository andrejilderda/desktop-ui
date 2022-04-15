import { style } from '@vanilla-extract/css';
import { pseudo } from 'lib/constants/styles';
import { createUtils } from 'lib/utils';
import { styles } from './themes/index';
import { componentName } from './index.css';
import { recipe } from '@vanilla-extract/recipes';
import { controlColors } from 'lib/styles/controlColors.css';

const { useVar, initialVars } = createUtils(componentName);

export const wrapper = style([
  {
    vars: initialVars(['color']),

    display: 'inline-flex',
    alignItems: 'flex-start',
    gap: '8px',
  },
]);

export const wrapperVariants = recipe({
  variants: {
    disabled: {
      true: styles.windows.wrapperVariants,
    },
  },
});

export const checkboxWrapper = style([
  {
    display: 'flex',
    alignItems: 'center',
  },
]);

export const root = style([
  {
    alignItems: 'center',
    fontSize: '8px',
    lineHeight: '8px',
    borderStyle: 'solid',
    borderWidth: useVar`--border-width`,
    borderRadius: useVar`--border-radius`,
    display: 'block',
    flexShrink: '0',
    height: useVar`--size`,
    width: useVar`--size`,
    margin: 0,
    padding: 0,
    transform: 'translateY(1px)',

    selectors: {
      [`${pseudo.hover}:not([disabled])`]: {
        color: useVar`--text-hover, --text`,
      },
    },
  },
  styles.windows.root,
  // styles.macos.root,
  ...controlColors,
]);

export const indicator = style([
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
]);

export const check = style([{ position: 'absolute' }]);
export const minus = style([{ position: 'absolute' }]);
export const label = style([
  {
    alignSelf: 'center',
    userSelect: 'none',
  },
]);
