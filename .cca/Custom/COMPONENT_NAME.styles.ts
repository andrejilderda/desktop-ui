import { createStyles } from 'src/theme/createStyles';
import { ComponentStyles, StylesFunctionArgs, CSS } from 'src/theme/types';
import { pseudo } from 'src/constants/styles';
// import { focusableVariants } from 'src/styles/focusableVariants';

const styles: ComponentStyles = {
  base: {},
  fn: ({ classPrefix, mode }: StylesFunctionArgs): CSS[] => {},
};

export default createStyles<keyof typeof styles>('cOMPONENT_NAME', styles);
