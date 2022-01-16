// prevent "Cannot find module './Progress.mdx' or its corresponding type
// declarations." for imported mdx files for Storybook
declare module '*.mdx' {
  const value: string;
  export default value;
}
