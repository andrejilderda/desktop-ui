import { transformTokens } from 'packages/private/transforms/transformTokens.css';

describe('transformTokens', () => {
  it('should transform single tokens', () => {
    expect(
      transformTokens('windows', {
        fontSize: '$2',
      }),
    ).toMatchInlineSnapshot(`
      Object {
        "fontSize": "14px",
      }
    `);
  });

  it('should transform tokens prefixed with a dash to a negative value', () => {
    expect(
      transformTokens('windows', {
        borderRadius: '-$2',
      }),
    ).toMatchInlineSnapshot(`
      Object {
        "borderRadius": "-4px",
      }
    `);
  });

  it('should transform multiple tokens within a string', () => {
    expect(
      transformTokens('windows', {
        padding: '$1 $2 $3 $4',
      }),
    ).toMatchInlineSnapshot(`
      Object {
        "padding": "4px 8px 12px 16px",
      }
    `);
  });

  it('should throw an error for undefined tokens', () => {
    expect(() =>
      transformTokens('windows', {
        width: '$undefined',
      }),
    ).toThrow();
  });
});
