import clsx from 'clsx';
import React, { ReactNode } from 'react';
import {
  classNamePrefix,
  pseudoWrapperClassNames,
} from '../packages/lib/constants/styles';
import ThemeProvider from '../packages/lib/contexts/ThemeProvider/ThemeProvider';
import { ThemeName, ThemeMode } from '../packages/lib/types';
import LegacyThemeProvider from './../src/contexts/ThemeProvider/ThemeProvider';
import { storybookPreview } from './preview.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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
      shortcuts: {
        next: {
          label: 'Go to next theme',
          keys: ['L'],
        },
        previous: {
          label: 'Go to previous theme',
          keys: ['K'],
        },
      },
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
    defaultValue: 'side-by-side',
    toolbar: {
      icon: 'contrast',
      items: [
        'auto',
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
        { value: 'side-by-side', icon: 'sidebar', title: 'side by side' },
        { value: 'stacked', icon: 'bottombar', title: 'stacked' },
      ],
      showName: true,
      shortcuts: {
        next: {
          label: 'Go to next mode',
          keys: ['O'],
        },
        previous: {
          label: 'Go to previous mode',
          keys: ['I'],
        },
      },
    },
  },
  pseudo: {
    name: 'Pseudo',
    defaultValue: 'light',
    toolbar: {
      icon: 'contrast',
      items: ['default', 'hover', 'active', 'focus-visible', 'all'],
      showName: true,
    },
  },
};

const StoryWrapper = ({
  story,
  pseudoState = 'default',
}: {
  story: React.ReactNode;
  pseudoState?: keyof typeof pseudoWrapperClassNames | 'all';
}) => {
  if (pseudoState === 'all') {
    return (
      <>
        <div className={pseudoWrapperClassNames['default']}>{story}</div>
        <div className={pseudoWrapperClassNames['hover']}>{story}</div>
        <div className={pseudoWrapperClassNames['active']}>{story}</div>
        <div className={pseudoWrapperClassNames['focusVisible']}>{story}</div>
      </>
    );
  }

  return <div className={pseudoWrapperClassNames[pseudoState]}>{story}</div>;
};

const ThemeProviders = ({
  children,
  ...props
}: {
  children: ReactNode;
  theme: ThemeName;
  mode: ThemeMode;
  local?: boolean;
}) => (
  // <LegacyThemeProvider {...props}>
  <ThemeProvider {...props} withGlobalStyles>
    {children}
  </ThemeProvider>
  // </LegacyThemeProvider>
);

export const decorators = [
  (Story, context) => {
    const { theme, mode, pseudo } = context.globals;
    const themeProviderProps = { theme, mode };

    if (mode === 'side-by-side' || mode === 'stacked')
      return (
        <div className={storybookPreview({ layout: mode })}>
          <ThemeProviders {...themeProviderProps} mode="light" local>
            <StoryWrapper story={<Story />} pseudoState={pseudo} />
          </ThemeProviders>
          <ThemeProviders {...themeProviderProps} mode="dark" local>
            <StoryWrapper story={<Story />} pseudoState={pseudo} />
          </ThemeProviders>
        </div>
      );

    return (
      <div
        className={clsx(storybookPreview(), pseudoWrapperClassNames[pseudo])}
      >
        <ThemeProviders {...themeProviderProps}>
          <StoryWrapper story={<Story />} pseudoState={pseudo} />
        </ThemeProviders>
      </div>
    );
  },
];
