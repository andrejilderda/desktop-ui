// workaround for Emotion's css type getting in the way with Stitches
// https://github.com/modulz/stitches/issues/248#issuecomment-837487056

// prevent "Cannot find module './Progress.mdx' or its corresponding type
// declarations." for imported mdx files for Storybook
declare module '*.mdx' {
  const value: string;
  export default value;
}
