import { varStyleRuleValue } from 'packages/private/transforms/varStyleRuleValue.css';

describe('varStyleRuleValue', () => {
  it('should transform single vars', () => {
    expect(
      varStyleRuleValue('componentName', {
        color: '1px solid $$foo $$bar',
      }),
    ).toMatchInlineSnapshot(`
      Object {
        "color": "1px solid var(--rd-componentName-foo) var(--rd-componentName-bar)",
      }
    `);
  });

  it('should transform vars with a fallback', () => {
    expect(
      varStyleRuleValue('componentName', {
        color: '($$foo, #ff0)',
      }),
    ).toMatchInlineSnapshot(`
      Object {
        "color": "var(--rd-componentName-foo, #ff0)",
      }
    `);
  });

  it('should transform subsequential vars to nested custom properties fallbacks', () => {
    expect(varStyleRuleValue('componentName', { color: '($$foo, $$bar)' }))
      .toMatchInlineSnapshot(`
      Object {
        "color": "var(--rd-componentName-foo, var(--rd-componentName-bar))",
      }
      `);
  });
});
