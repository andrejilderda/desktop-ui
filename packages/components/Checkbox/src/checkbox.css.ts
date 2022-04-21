import { style } from '@vanilla-extract/css';
import { styles } from './themes/index';
import { componentName } from './index.css';
import { recipe } from '@vanilla-extract/recipes';
import { rdStyle as rdStylePartial } from 'packages/private/rdStyle.css';
import { controlColors } from 'packages/private/styles/controlColors.css';

const rdStyle = rdStylePartial({ componentName });

export const wrapper = style(
  rdStyle({
    display: 'inline-flex',
    alignItems: 'flex-start',
    gap: '8px',
  }),
);

export const wrapperVariants = recipe({
  variants: {
    disabled: {
      true: styles.windows.wrapperVariants,
    },
  },
  ...styles.windows.wrapperVariants,
});

export const checkboxWrapper = style(
  rdStyle({
    display: 'flex',
    alignItems: 'center',
  }),
);

export const root = style([
  ...rdStyle({
    alignItems: 'center',
    fontSize: '8px',
    lineHeight: '8px',
    borderStyle: 'solid',
    borderWidth: '$$border-width',
    borderRadius: '$$border-radius',
    display: 'block',
    flexShrink: '0',
    height: '$$size',
    outlineStyle: 'solid',
    outlineColor: '$$outline-color',
    outlineWidth: '0',
    width: '$$size',
    margin: 0,
    padding: 0,
    transform: 'translateY(1px)',
  }),
  ...styles.windows.root,
  ...controlColors,
  // styles.macos.root,
]);

export const indicator = style(
  rdStyle({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  }),
);

export const check = style([{ position: 'absolute' }]);
export const minus = style([{ position: 'absolute' }]);
export const label = style([
  {
    alignSelf: 'center',
    userSelect: 'none',
  },
]);
