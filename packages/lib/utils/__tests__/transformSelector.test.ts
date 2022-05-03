import { transformSelector } from 'lib/utils/transformSelector';

describe('getSelector', () => {
  it('should return the selector with the extension', () => {
    const originalSelector = '.foo &';
    const extension = '&:hover';
    const selector = transformSelector(extension, originalSelector);
    expect(selector).toBe('.foo &:hover');
  });

  it('should transform multiple extensions', () => {
    const originalSelector = '.foo &';
    const extension = '&:hover, &:focus';
    const selector = transformSelector(extension, originalSelector);
    expect(selector).toBe('.foo &:hover, .foo &:focus');
  });
});
