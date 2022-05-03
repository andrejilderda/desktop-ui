import { createUseVarFn } from '../createUseVarFn';

describe('createUseVarFn', () => {
  it('should create the correct object properties with or without fallback', () => {
    const useVar = createUseVarFn('componentName');

    expect({ fontSize: useVar`--font-size` }).toMatchInlineSnapshot(`
      Object {
        "fontSize": "var(--rd-componentName-font-size)",
      }
    `);

    expect({
      borderColor: useVar`--border-disabled, --border`,
    }).toMatchInlineSnapshot(`
      Object {
        "borderColor": "var(--rd-componentName-border-disabled,border, var(--rd-componentName---border))",
      }
    `);

    expect({
      border: useVar`--border-disabled, 2px solid red`,
    }).toMatchInlineSnapshot(`
      Object {
        "border": "var(--rd-componentName-border-disabled, 2px solid red)",
      }
    `);
  });
});
