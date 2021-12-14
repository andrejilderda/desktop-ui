import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ConditionalWrapper } from './src/utils/helpers';
import ThemeProvider from './src/contexts/ThemeProvider';

interface ProvidersProps {
  children?: React.ReactNode;
  withThemeProvider?: boolean;
}
const Providers = ({ children, withThemeProvider = true }: ProvidersProps) => {
  // Add ThemeProvider conditionally
  return (
    <ConditionalWrapper
      condition={withThemeProvider}
      wrapper={(children) => (
        <ThemeProvider theme="dark" mode="dark" enableWindowBlur={false}>
          {children}
        </ThemeProvider>
      )}
    >
      <>{children}</>
    </ConditionalWrapper>
  );
};

const renderWithProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Providers, ...options });

export { renderWithProviders };
