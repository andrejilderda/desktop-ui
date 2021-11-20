import React from 'react';
import { render, screen } from '@testing-library/react';
import Container from './Container';
import { withTheme } from '../../../hocs/withTheme';

const ThemedContainer = withTheme(Container);

test('renders a default Container', () => {
    const { baseElement } = render(<ThemedContainer>TESTING</ThemedContainer>);
    expect(screen.getByText('TESTING')).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
});
