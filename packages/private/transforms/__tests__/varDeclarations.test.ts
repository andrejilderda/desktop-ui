import { varDeclarations } from 'packages/private/transforms/varDeclarations.css';

describe('varDeclarations', () => {
  it('should transform var declarations with a prefix of namespace & component name', () => {
    expect(varDeclarations('component-name', { $$size: '16px' }))
      .toMatchInlineSnapshot(`
      Object {
        "--rd-component-name-size": "16px",
      }
    `);
  });
});
