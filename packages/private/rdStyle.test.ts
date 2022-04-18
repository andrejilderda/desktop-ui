import { pseudo } from 'lib/constants/styles';
import { rdStyle } from './rdStyle.css';

describe('rdStyle', () => {
  it('should apply all transforms to a simple style object', () => {
    const obj = {
      $$size: '16px', // 1. var declaration
      color: '$$fill', // 2. var usage
      borderColor: '($$fill, $$foo)', // 2. var usage with fallback
    };

    expect(rdStyle({ componentName: 'component-name' }, obj))
      .toMatchInlineSnapshot(`
      Object {
        "selectors": Object {
          "&": Object {
            "borderColor": "var(--rd-component-name-fill, var(--rd-component-name-foo))",
            "color": "var(--rd-component-name-fill)",
            "vars": Object {
              "--rd-component-name-size": "16px",
            },
          },
        },
      }
    `);
  });

  it('should apply all theme transforms to a flat object', () => {
    const obj = {
      $$size: '16px', // 1. var declaration
      color: '$$fill', // 2. var usage
      borderColor: '($$fill, $$foo)', // 2. var usage with fallback

      colors: (t: any) => ({
        $$fill: t.fill_color.accent.default, // 3. var declaration within color fn

        backgroundColor: t.fill_color.text.primary, // 4. color token usage
      }),
    };

    expect(rdStyle({ componentName: 'component-name', theme: 'windows' }, obj))
      .toMatchInlineSnapshot(`
      Object {
        "selectors": Object {
          ".theme_windows-dark__2tecqm1 &": Object {
            "backgroundColor": "rgb(255, 255, 255)",
            "vars": Object {
              "--rd-component-name-fill": "rgb(96, 205, 255)",
            },
          },
          ".theme_windows-light__2tecqm0 &": Object {
            "backgroundColor": "rgba(0, 0, 0, 0.9)",
            "vars": Object {
              "--rd-component-name-fill": "rgb(0, 95, 184)",
            },
          },
          ".theme_windows-light__2tecqm0 &, .theme_windows-dark__2tecqm1 &": Object {
            "borderColor": "var(--rd-component-name-fill, var(--rd-component-name-foo))",
            "color": "var(--rd-component-name-fill)",
            "vars": Object {
              "--rd-component-name-size": "16px",
            },
          },
        },
      }
    `);
  });

  it('should apply all theme transforms to an object with multiple selectors', () => {
    const obj = {
      $$size: '16px', // 1. var declaration

      selectors: {
        // inside selector
        '&:hover': {
          background: 'yellow',

          colors: (t: any) => ({
            $$bar: t.fill_color.accent.default, // 3. var declaration within color fn
            color: t.fill_color.text.primary, // 4. color token usage
          }),
        },
      },
    };

    const result = rdStyle(
      { componentName: 'component-name', theme: 'windows' },
      obj,
    );

    expect(result).toMatchInlineSnapshot(`
      Object {
        "selectors": Object {
          ".theme_windows-dark__2tecqm1 &:hover": Object {
            "color": "rgb(255, 255, 255)",
            "vars": Object {
              "--rd-component-name-bar": "rgb(96, 205, 255)",
            },
          },
          ".theme_windows-light__2tecqm0 &, .theme_windows-dark__2tecqm1 &": Object {
            "vars": Object {
              "--rd-component-name-size": "16px",
            },
          },
          ".theme_windows-light__2tecqm0 &:hover": Object {
            "color": "rgba(0, 0, 0, 0.9)",
            "vars": Object {
              "--rd-component-name-bar": "rgb(0, 95, 184)",
            },
          },
          ".theme_windows-light__2tecqm0 &:hover, .theme_windows-dark__2tecqm1 &:hover": Object {
            "background": "yellow",
          },
        },
      }
    `);
  });

  it("should throw error when there's a colors-function, but no theme is provided", () => {
    expect(() =>
      rdStyle(
        { componentName: 'foo' },
        {
          colors: (t: any) => ({
            backgroundColor: t.fill_color.text.primary,
          }),
        },
      ),
    ).toThrow();
  });
});
