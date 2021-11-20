import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import { withTheme } from '../../hocs/withTheme';
import userEvent from '@testing-library/user-event';

const ThemedButton = withTheme(Button);
describe('Button', () => {
    test('renders a default button with text', () => {
        const { baseElement } = render(<ThemedButton label={'Click me'} />);

        expect(screen.getByText('Click me')).toBeInTheDocument();
        expect(screen.getByText('Click me')).toHaveStyle({
            backgroundColor: '#025D92',
            color: 'white',
        });
        expect(baseElement).toMatchSnapshot();
    });
    test('renders a primary button', () => {
        const { baseElement } = render(<ThemedButton variant="primary" label={'Click me'} />);

        expect(screen.getByText('Click me')).toHaveStyle({
            backgroundColor: '#025D92',
            color: 'white',
        });
        expect(baseElement).toMatchSnapshot();
    });
    test('handles onClick', () => {
        const mockOnClick = jest.fn();
        const { baseElement } = render(<ThemedButton label={'Click Me'} onClick={mockOnClick} />);
        userEvent.click(screen.getByText('Click Me'));

        expect(mockOnClick).toHaveBeenCalledTimes(1);
        expect(baseElement).toMatchSnapshot();
    });
});
