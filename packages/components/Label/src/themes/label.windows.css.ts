import { componentName } from '../index';
import { assignTokensToVars } from 'lib/utils/helpers';

const labelVars = assignTokensToVars(componentName, 'windows', {
  '--text': 'fill_color.text.primary',
});

export default labelVars;
