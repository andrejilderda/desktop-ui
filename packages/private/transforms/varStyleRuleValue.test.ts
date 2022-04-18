import { varStyleRuleValue } from './varStyleRuleValue.css';

describe('varStyleRuleValue', () => {
  it('should transform single vars', () => {
    expect(
      varStyleRuleValue('componentName', {
        withRegularFallback: '1px solid $$foo $$bar',
      }),
    ).toMatchInlineSnapshot(`
      Object {
        "withRegularFallback": "1px solid var(--rd-componentName-foo) var(--rd-componentName-bar)",
      }
    `);
  });

  it('should transform vars with a fallback', () => {
    expect(
      varStyleRuleValue('componentName', {
        withRegularFallback: '($$foo, #ff0)',
      }),
    ).toMatchInlineSnapshot(`
      Object {
        "withRegularFallback": "var(--rd-componentName-foo, #ff0)",
      }
    `);
  });

  it('should transform subsequential vars to nested custom properties fallbacks', () => {
    expect(
      varStyleRuleValue('componentName', { withVarFallback: '($$foo, $$bar)' }),
    ).toMatchInlineSnapshot(`
      Object {
        "withVarFallback": "var(--rd-componentName-foo, var(--rd-componentName-bar))",
      }
      `);
  });
});
