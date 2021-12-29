import createStyles from 'src/theme/createStyles';
import { ComponentStyles, StylesFunctionArgs, CSS } from 'src/theme/types';
import { pseudo } from 'src/constants/styles';
// import focusableVariants from 'src/styles/focusableVariants';

const styles: ComponentStyles = {
  trigger: ({ mode }: StylesFunctionArgs): CSS => ({}),
  portal: ({ mode }: StylesFunctionArgs): CSS => ({}),
  overlay: ({ mode }: StylesFunctionArgs): CSS => ({
    background: 'rgba(0 0 0 / 0.5)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'grid',
    placeItems: 'center',
    overflowY: 'auto',
  }),
  content: ({ mode }: StylesFunctionArgs): CSS => ({
    minWidth: 300,
    background: 'white',
    padding: 30,
    borderRadius: 4,
  }),
  title: ({ mode }: StylesFunctionArgs): CSS => ({}),
  description: ({ mode }: StylesFunctionArgs): CSS => ({}),
  close: ({ mode }: StylesFunctionArgs): CSS => ({}),
};

export default createStyles<keyof typeof styles>('dialog', styles);
