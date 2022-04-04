import { createSetVarFn } from '../createSetVarFn';

describe('createSetVarFn', () => {
  it('should create namespaced vars when given a single or multile lines', () => {
    const setVar = createSetVarFn('componentName');

    // single
    expect(setVar`--font-size: 12px`).toMatchInlineSnapshot(`
      Object {
        "--rd-componentName-font-size": "12px",
      }
    `);

    // multiple
    expect(setVar`
      --font-size: 12px,
      --border-color: #ccc,
    `).toMatchInlineSnapshot(`
      Object {
        "--rd-componentName-border-color": "#ccc",
        "--rd-componentName-font-size": "12px",
      }
    `);
  });
});
