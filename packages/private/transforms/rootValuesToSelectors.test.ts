import { rootValuesToSelectors } from './rootValuesToSelectors.css';

describe('rootValuesToSelectors', () => {
  it('should move root values to `selectors`-property', () => {
    expect(
      rootValuesToSelectors({
        background: 'red',

        selectors: {
          '&:hover': {
            background: 'blue',
          },
        },
      }),
    ).toMatchInlineSnapshot(`
      Object {
        "selectors": Object {
          "&": Object {
            "background": "red",
          },
          "&:hover": Object {
            "background": "blue",
          },
        },
      }
    `);
  });
});
