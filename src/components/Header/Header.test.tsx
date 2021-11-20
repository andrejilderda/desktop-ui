import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { withTheme } from '../../hocs/withTheme';
import userEvent from '@testing-library/user-event';

const ThemedHeader = withTheme(Header);

describe('Button', () => {
    test('renders a default header while user is underfined', () => {
        const mockOnLogin = jest.fn();
        const mockOnLogout = jest.fn();
        const mockOnCreateAccount = jest.fn();

        const { baseElement } = render(
            <ThemedHeader onLogin={mockOnLogin} onLogout={mockOnLogout} onCreateAccount={mockOnCreateAccount} />,
        );
        const loginButton = screen.queryByText('Log in');
        const logoutButton = screen.queryByText('Log out');
        const signupButton = screen.queryByText('Sign up');

        expect(screen.getByText('Acme')).toBeInTheDocument();
        expect(loginButton).toBeInTheDocument();
        expect(logoutButton).not.toBeInTheDocument();
        expect(signupButton).toBeInTheDocument();
        if (loginButton) {
            userEvent.click(loginButton);
            expect(mockOnLogin).toHaveBeenCalledTimes(1);
        }
        if (signupButton) {
            userEvent.click(signupButton);
            expect(mockOnCreateAccount).toHaveBeenCalledTimes(1);
        }

        expect(baseElement).toMatchSnapshot();
    });
    test('renders a default header while user is defined ', () => {
        const mockOnLogin = jest.fn();
        const mockOnLogout = jest.fn();
        const mockOnCreateAccount = jest.fn();

        const { baseElement } = render(
            <ThemedHeader
                user={{ name: 'chams' }}
                onLogin={mockOnLogin}
                onLogout={mockOnLogout}
                onCreateAccount={mockOnCreateAccount}
            />,
        );
        const LoginButton = screen.queryByText('Log in');
        const LogoutButton = screen.queryByText('Log out');
        const signupButton = screen.queryByText('Sign up');

        expect(screen.getByText('Acme')).toBeInTheDocument();
        expect(LoginButton).not.toBeInTheDocument();
        expect(LogoutButton).toBeInTheDocument();
        expect(signupButton).not.toBeInTheDocument();

        if (LogoutButton) {
            userEvent.click(LogoutButton);
            expect(mockOnLogout).toHaveBeenCalledTimes(1);
        }

        expect(baseElement).toMatchSnapshot();
    });
});
