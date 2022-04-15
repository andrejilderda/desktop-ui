import { themeUtils } from '../themeUtils.css';

describe('themeUtils', () => {
  it.only('should partition styles to the right selector when no themeMode is set (dark/light)', () => {
    const { theme } = themeUtils('windows', 'componentName');

    // light & dark
    const result = theme({
      $$size: '12px',
      border: '1px solid red',

      colors: (t: any) => ({
        $$fill: t.fill_color.accent.default,
        color: t.fill_color.text.primary,
      }),
    });

    expect(result).toMatchInlineSnapshot(`
      Object {
        "selectors": Object {
          ".theme_windows-dark__2tecqm1 &": Object {
            "color": "rgb(255, 255, 255)",
            "vars": Object {
              "--rd-componentName-fill": "rgb(96, 205, 255)",
            },
          },
          ".theme_windows-light__2tecqm0 &": Object {
            "color": "rgba(0, 0, 0, 0.9)",
            "vars": Object {
              "--rd-componentName-fill": "rgb(0, 95, 184)",
            },
          },
          ".theme_windows-light__2tecqm0 &, .theme_windows-dark__2tecqm1 &": Object {
            "--size": "12px",
            "border": "1px solid red",
            "vars": Object {
              "--rd-componentName-size": "12px",
            },
          },
        },
      }
    `);
  });

  it('should prefix custom properties & populate tokens properly', () => {
    const { theme } = themeUtils('windows', 'componentName');

    expect(theme({ $$size: '16px' })).toMatchInlineSnapshot(`
      Object {
        "selectors": Object {
          ".theme_windows-light__2tecqm0 &, .theme_windows-dark__2tecqm1 &": Object {
            "--size": "16px",
            "vars": Object {
              "--rd-componentName-size": "16px",
            },
          },
        },
      }
    `);
  });

  it('should transform custom selectors properly', () => {
    const { theme } = themeUtils('windows', 'componentName');

    expect(theme('light', '.foo &', { $$size: '16px' })).toMatchInlineSnapshot(`
      Object {
        "selectors": Object {
          ".theme_windows-light__2tecqm0 .foo &": Object {
            "--size": "16px",
            "vars": Object {
              "--rd-componentName-size": "16px",
            },
          },
        },
      }
    `);

    expect(theme('light', '.foo &, .bar &', { $$size: '16px' }))
      .toMatchInlineSnapshot(`
      Object {
        "selectors": Object {
          ".theme_windows-light__2tecqm0 .foo &, .theme_windows-light__2tecqm0 .bar &": Object {
            "--size": "16px",
            "vars": Object {
              "--rd-componentName-size": "16px",
            },
          },
        },
      }
    `);
  });
});
