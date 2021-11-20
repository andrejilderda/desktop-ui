import React from 'react';
import PropTypes, { string } from 'prop-types';
import Button from '../Button/Button';
import { Icon, Title, Container } from '../atoms';

export interface HeaderProps {
    user?: Record<string, unknown>;
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogin, onLogout, onCreateAccount }) => (
    <header>
        <Container>
            <div>
                <Icon />
                <Title fontWeight={800} fontSize={20} lineHeight={1} margin="6px 0 6px 10px" verticalAlign="top">
                    Acme
                </Title>
            </div>
            <div>
                {user ? (
                    <Button size="small" onClick={onLogout} label="Log out" />
                ) : (
                    <>
                        <Button size="small" onClick={onLogin} label="Log in" />
                        <Button
                            variant="primary"
                            size="small"
                            marginLeft={10}
                            onClick={onCreateAccount}
                            label="Sign up"
                        />
                    </>
                )}
            </div>
        </Container>
    </header>
);

Header.propTypes = {
    user: PropTypes.objectOf(string),
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onCreateAccount: PropTypes.func.isRequired,
};

export default Header;
