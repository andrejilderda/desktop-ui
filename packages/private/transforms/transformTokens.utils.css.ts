// With thanks to Stitches:
// https://github.com/modulz/stitches/blob/3a43db28570c6abf0e51852899cd4478f3a1111f/packages/core/src/default/defaultThemeMap.js

const borderStyles = 'borderStyles';
const borderWidths = 'borderWidths';
const colors = 'colors';
const fonts = 'fonts';
const fontSizes = 'fontSizes';
const fontWeights = 'fontWeights';
const letterSpacings = 'letterSpacings';
const lineHeights = 'lineHeights';
const radii = 'radii';
const shadows = 'shadows';
const sizes = 'sizes';
const space = 'space';
const transitions = 'transitions';
const zIndices = 'zIndices';

export const tokenMap = {
  gap: space,
  gridGap: space,
  columnGap: space,
  gridColumnGap: space,
  rowGap: space,
  gridRowGap: space,
  inset: space,
  insetBlock: space,
  insetBlockEnd: space,
  insetBlockStart: space,
  insetInline: space,
  insetInlineEnd: space,
  insetInlineStart: space,
  margin: space,
  marginTop: space,
  marginRight: space,
  marginBottom: space,
  marginLeft: space,
  marginBlock: space,
  marginBlockEnd: space,
  marginBlockStart: space,
  marginInline: space,
  marginInlineEnd: space,
  marginInlineStart: space,
  padding: space,
  paddingTop: space,
  paddingRight: space,
  paddingBottom: space,
  paddingLeft: space,
  paddingBlock: space,
  paddingBlockEnd: space,
  paddingBlockStart: space,
  paddingInline: space,
  paddingInlineEnd: space,
  paddingInlineStart: space,
  top: space,
  right: space,
  bottom: space,
  left: space,
  scrollMargin: space,
  scrollMarginTop: space,
  scrollMarginRight: space,
  scrollMarginBottom: space,
  scrollMarginLeft: space,
  scrollMarginX: space,
  scrollMarginY: space,
  scrollMarginBlock: space,
  scrollMarginBlockEnd: space,
  scrollMarginBlockStart: space,
  scrollMarginInline: space,
  scrollMarginInlineEnd: space,
  scrollMarginInlineStart: space,
  scrollPadding: space,
  scrollPaddingTop: space,
  scrollPaddingRight: space,
  scrollPaddingBottom: space,
  scrollPaddingLeft: space,
  scrollPaddingX: space,
  scrollPaddingY: space,
  scrollPaddingBlock: space,
  scrollPaddingBlockEnd: space,
  scrollPaddingBlockStart: space,
  scrollPaddingInline: space,
  scrollPaddingInlineEnd: space,
  scrollPaddingInlineStart: space,

  fontSize: fontSizes,

  background: colors,
  backgroundColor: colors,
  backgroundImage: colors,
  borderImage: colors,
  border: colors,
  borderBlock: colors,
  borderBlockEnd: colors,
  borderBlockStart: colors,
  borderBottom: colors,
  borderBottomColor: colors,
  borderColor: colors,
  borderInline: colors,
  borderInlineEnd: colors,
  borderInlineStart: colors,
  borderLeft: colors,
  borderLeftColor: colors,
  borderRight: colors,
  borderRightColor: colors,
  borderTop: colors,
  borderTopColor: colors,
  caretColor: colors,
  color: colors,
  columnRuleColor: colors,
  fill: colors,
  outline: colors,
  outlineColor: colors,
  stroke: colors,
  textDecorationColor: colors,

  fontFamily: fonts,

  fontWeight: fontWeights,

  lineHeight: lineHeights,

  letterSpacing: letterSpacings,

  blockSize: sizes,
  minBlockSize: sizes,
  maxBlockSize: sizes,
  inlineSize: sizes,
  minInlineSize: sizes,
  maxInlineSize: sizes,
  width: sizes,
  minWidth: sizes,
  maxWidth: sizes,
  height: sizes,
  minHeight: sizes,
  maxHeight: sizes,
  flexBasis: sizes,
  gridTemplateColumns: sizes,
  gridTemplateRows: sizes,

  borderWidth: borderWidths,
  borderTopWidth: borderWidths,
  borderRightWidth: borderWidths,
  borderBottomWidth: borderWidths,
  borderLeftWidth: borderWidths,

  borderStyle: borderStyles,
  borderTopStyle: borderStyles,
  borderRightStyle: borderStyles,
  borderBottomStyle: borderStyles,
  borderLeftStyle: borderStyles,

  borderRadius: radii,
  borderTopLeftRadius: radii,
  borderTopRightRadius: radii,
  borderBottomRightRadius: radii,
  borderBottomLeftRadius: radii,

  boxShadow: shadows,
  textShadow: shadows,

  transition: transitions,

  zIndex: zIndices,
} as const;