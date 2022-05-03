import { groupVars } from 'packages/private/transforms/groupVars.css';

describe('groupVars', () => {
  it('should group vars in its own `vars`-property', () => {
    expect(
      groupVars({
        $$foo: 'bar',
        background: 'red',
      }),
    ).toMatchInlineSnapshot(`
      Object {
        "background": "red",
        "vars": Object {
          "$$foo": "bar",
        },
      }
    `);
  });
});
