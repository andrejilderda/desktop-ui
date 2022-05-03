import { componentName } from './index.css';
import { rdStyle as rdStylePartial } from 'packages/private/rdStyle.css';
import { globalStyle, style } from '@vanilla-extract/css';
import { styles } from 'components/Dialog/src/themes';
import { buttonStyle } from 'components/Button/src/button.css';
import { recipe } from '@vanilla-extract/recipes';

const rdStyle = rdStylePartial({ componentName });

export const overlay = style([
  ...rdStyle({
    background: '$$overlay',
    display: 'grid',
    overflowY: 'auto',
    placeItems: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  }),
]);

export const base = style([...styles.windows.base]);

export const content = style([
  ...rdStyle({
    backgroundImage:
      'linear-gradient( $$bgContent, $$bgContent ), linear-gradient( $$bgBase, $$bgBase )',
    color: '$$text',
    outline: '1px solid $$outlineColor',
    userSelect: 'none',
  }),
  ...styles.windows.content,
]);

export const contentSizeRecipe = recipe({
  base: {},
  variants: {
    size: {
      standard: {
        width: '448px',
      },
      min: {
        width: '320px',
      },
      max: {
        width: '540px',
      },
    },
  },
});

export const title = style([...styles.windows.title]);

export const description = style([...styles.windows.description]);

export const footer = style([
  ...rdStyle({
    background: '$$bgFooter',
    display: 'flex',
    justifyContent: 'flex-end',
  }),
  ...styles.windows.footer,
]);

globalStyle(`${footer} ${buttonStyle}`, {
  flex: '1 0 auto',
  maxWidth: '50%',
});
