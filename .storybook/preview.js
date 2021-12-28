import ThemeProvider from './../src/contexts/ThemeProvider/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { disable: true },
  viewport: { disable: true },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Docs', 'Getting Started', 'Components'],
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme/OS',
    defaultValue: 'windows',
    toolbar: {
      icon: 'browser',
      items: [
        {
          title: 'macOS',
          value: 'macos',
        },
        {
          title: 'Windows',
          value: 'windows',
        },
      ],
      showName: true,
    },
  },
  mode: {
    name: 'Mode',
    defaultValue: 'auto',
    toolbar: {
      icon: 'contrast',
      items: ['auto', 'light', 'dark'],
      showName: true,
    },
  },
};

export const decorators = [
  (Story, context) => (
    <ThemeProvider
      theme={context.globals.theme}
      mode={context.globals.mode}
      withGlobalStyles
    >
      <Story />
    </ThemeProvider>
  ),
];
