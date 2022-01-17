import { componentName } from '../index';
import { assignTokensToVars } from 'lib/utils/helpers';

const component_nameVars = assignTokensToVars(componentName, 'windows', {
  '--fill': 'fill_color.control.default',
  '--fill-hover': 'fill_color.control.secondary',
});

export default component_nameVars;
