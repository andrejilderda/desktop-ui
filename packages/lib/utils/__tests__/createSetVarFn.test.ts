import { tokens } from 'lib/themes/windows/tokens';
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
