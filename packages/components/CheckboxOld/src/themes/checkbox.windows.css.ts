import { componentName } from '../index.css';
import { assignTokensToVars } from 'lib/utils/helpers.css';

const checkboxVars = assignTokensToVars(componentName, 'windows', {
  '--fill': 'fill_color.control.default',
  '--fill-hover': 'fill_color.control.secondary',
});

export default checkboxVars;
