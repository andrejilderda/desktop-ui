import { tokens } from 'lib/themes/windows/tokens';
import { createSetVarFn } from '../createSetVarFn';
import { createUseVarFn } from '../createUseVarFn';

describe('createSetVarFn', () => {
  it('should create namespaced vars when given a single or multiple lines', () => {
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

  it('should process vars as values', () => {
    const setVar = createSetVarFn('componentName');
    const useVar = createUseVarFn('componentName');

    expect(setVar`
      --border-radius: ${useVar`--foo`},
      --font-size: ${useVar`--bar`}
    `).toMatchInlineSnapshot(`
      Object {
        "--rd-componentName-border-radius": "var(--rd-componentName-foo)",
        "--rd-componentName-font-size": "var(--rd-componentName-bar)",
      }
    `);
  });

  it('should process template literal strings', () => {
    const setVar = createSetVarFn('componentName');

    expect(setVar`
      --border-radius: ${tokens.radii[1]}
      --font-size: ${tokens.fontSizes[1]}
    `).toMatchInlineSnapshot(`
      Object {
        "--rd-componentName-border-radius": "${tokens.radii[1]}",
        "--rd-componentName-font-size": "${tokens.fontSizes[1]}",
      }
    `);
  });
});
