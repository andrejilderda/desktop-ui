# @desktop-ui/tokens

This package contains the tools for generating the design tokens for Desktop UI.

## Base tokens

The base tokens are the tokens that are used to generate more useful things like CSS variables and JSON-files that are used for documentation purposes. These tokens are stored in the `src/tokens`-directory and used as an input for [Style Dictionary](https://amzn.github.io/style-dictionary/#/).

The Windows tokens are exported from the official [Windows UI 3 Figma file](https://www.figma.com/community/file/1159947337437047524) using the [Design Tokens](https://www.figma.com/community/plugin/888356646278934516)-plugin.

The macOS tokens unfortunately aren’t so neatly documented, so we retrieve them using a script `pnpm build:macos-tokens`. This script will generate a file `src/tokens/macos-color-tokens.generated.json` which contains the tokens. Note that this will only work on macOS, since it uses a combination of Swift and Applescript to retrieve the tokens from the OS.

## Generating the tokens

The tokens are generated using the `pnpm build`-script. This will generate the following files:

_TODO: Add generated files_
