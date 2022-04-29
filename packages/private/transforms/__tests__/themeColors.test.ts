import { themeColors } from 'packages/private/transforms/themeColors.css';

describe('themeColors', () => {
  it('should not transform when no theme and mode is provided', () => {
    expect(
      themeColors(
        {},
        {
          selectors: {
            '&': {
              background: 'red',
            },
          },
        },
      ),
    ).toMatchInlineSnapshot(`
      Object {
        "selectors": Object {
          "&": Object {
            "background": "red",
          },
        },
      }
    `);
  });

  it('should partition vars and properties + replace color tokens when no mode is provided (= dark & light)', () => {
    expect(
      themeColors(
        {
          theme: 'windows',
        },

        {
          selectors: {
            '&': {
              colors: (t: any) => ({
                $$fill: t.fill_color.accent.default,
                color: t.fill_color.text.primary,
              }),
            },
          },
        },
      ),
    ).toMatchInlineSnapshot(`
      Object {
        "selectors": Object {
          ".theme_windows-dark__2tecqm1 &": Object {
            "$$fill": "rgb(96, 205, 255)",
            "color": "rgb(255, 255, 255)",
          },
          ".theme_windows-light__2tecqm0 &": Object {
            "$$fill": "rgb(0, 95, 184)",
            "color": "rgba(0, 0, 0, 0.9)",
          },
          ".theme_windows-light__2tecqm0 &, .theme_windows-dark__2tecqm1 &": Object {},
        },
      }
    `);
  });

  it('should partition vars and properties + replace color tokens for the provided theme mode (= light)', () => {
    expect(
      themeColors(
        {
          theme: 'windows',
          mode: 'light',
        },

        {
          selectors: {
            '&': {
              background: 'red',
              colors: (t: any) => ({
                $$fill: t.fill_color.accent.default,
                color: t.fill_color.text.primary,
              }),
            },
          },
        },
      ),
    ).toMatchInlineSnapshot(`
      Object {
        "selectors": Object {
          ".theme_windows-light__2tecqm0 &": Object {
            "$$fill": "rgb(0, 95, 184)",
            "color": "rgba(0, 0, 0, 0.9)",
          },
        },
      }
    `);
  });
});
