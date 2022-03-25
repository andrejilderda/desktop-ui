import * as LabelPrimitive from '@radix-ui/react-label';
import * as styles from './label.css';
import clsx from 'clsx';

export type LabelProps = LabelPrimitive.LabelProps;

const Label = ({ className, ...props }: LabelProps) => (
  <LabelPrimitive.Root
    className={clsx(className, styles.labelStyle)}
    {...props}
  />
);
export default Label;

export const useLabelContext = LabelPrimitive.useLabelContext;
