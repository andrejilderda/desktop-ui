import createStyles from 'src/theme/createStyles';
import { ComponentStyles } from 'src/theme/types';
// import focusableVariants from 'src/styles/focusableVariants';

const styles: ComponentStyles = {
  wrapper: {},
};

export default createStyles<keyof typeof styles>('radioGroup', styles);
