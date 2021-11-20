import React from 'react';
import { render } from '@testing-library/react';
import Icon from './Icon';
import { withTheme } from '../../../hocs/withTheme';

const ThemedIcon = withTheme(Icon);

test('renders a default Icon', () => {
    const { baseElement } = render(<ThemedIcon />);
    expect(baseElement).toMatchSnapshot();
});
