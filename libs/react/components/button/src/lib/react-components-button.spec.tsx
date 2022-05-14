import { render } from '@testing-library/react';

import ReactComponentsButton from './react-components-button';

describe('ReactComponentsButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactComponentsButton />);
    expect(baseElement).toBeTruthy();
  });
});
