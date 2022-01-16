import * as React from 'react';
import { screen, render } from '@testing-library/react';
import Wrap from '..';

describe('Wrap', () => {
  test('renders wrapper when condition is true', () => {
    render(
      <Wrap
        if={true}
        with={(children) => <div>Conditional wrapping div: {children}</div>}
      >
        <>Foo</>
      </Wrap>,
    );

    expect(screen.getByText(/foo/i)).toBeInTheDocument();
    expect(screen.getByText(/conditional wrapping div/i)).toBeInTheDocument();
  });

  test('does NOT render wrapper when condition is false', () => {
    render(
      <Wrap
        if={false}
        with={(children) => <div>Conditional wrapping div: {children}</div>}
      >
        <>Foo</>
      </Wrap>,
    );

    expect(screen.getByText(/foo/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/conditional wrapping div/i),
    ).not.toBeInTheDocument();
  });
});
