import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './Title';
import { withTheme } from '../../../hocs/withTheme';

const ThemedTitle = withTheme(Title);

test('renders a default Title', () => {
    const { baseElement } = render(<ThemedTitle>TESTING</ThemedTitle>);
    expect(screen.getByText('TESTING')).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
});
