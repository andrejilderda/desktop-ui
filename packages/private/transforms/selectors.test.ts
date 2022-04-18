import { selectors } from './selectors.css';

describe('selectors', () => {
  it('should transform selectors', () => {
    expect(selectors('.windowsTheme &', '.foo &')).toMatchInlineSnapshot(
      `".windowsTheme .foo &"`,
    );
  });

  it('should transform multiple selectors', () => {
    expect(selectors('.windowsTheme &', '&.foo, &.bar')).toMatchInlineSnapshot(
      `".windowsTheme &.foo, .windowsTheme &.bar"`,
    );
  });

  it.only('should transform pseudo selectors', () => {
    expect(
      selectors('.windowsTheme &', '&:hover .foo, &:focus-visible .foo'),
    ).toMatchInlineSnapshot(
      `".windowsTheme &:hover .foo, .windowsTheme &:focus-visible .foo"`,
    );
  });
});
