import {
  prefixVarCurried,
  prefixVarsStyleRuleValue,
  transformVars,
} from '../transformVars.css';

describe('transformVars', () => {
  it('should prefix the variable name with the namespace & component-name', () => {
    expect(prefixVarCurried('component-name', '$$size')).toMatchInlineSnapshot(
      `"--rd-component-name-size"`,
    );
  });

  it('should provide custom properties fallbacks when subsequential vars or another value is found', () => {
    expect(
      prefixVarsStyleRuleValue('componentName', '($$foo, $$bar)'),
    ).toMatchInlineSnapshot(
      `"var(--rd-componentName-foo, var(--rd-componentName-bar))"`,
    );

    expect(
      prefixVarsStyleRuleValue('componentName', '($$foo, #ff0)'),
    ).toMatchInlineSnapshot(`"var(--rd-componentName-foo, #ff0)"`);
  });

  it('should apply above transformations to object keys and values', () => {
    expect(
      transformVars('component-name', {
        $$size: '12px',
        $$background: '#ff0',

        selectors: {
          ['&:hover']: {
            $$size: '24px',
          },
        },
      }),
    ).toMatchInlineSnapshot(`
      Object {
        "--rd-component-name-background": "#ff0",
        "--rd-component-name-size": "12px",
        "selectors": Object {
          "&:hover": Object {
            "--rd-component-name-size": "24px",
          },
        },
      }
    `);
  });
});
