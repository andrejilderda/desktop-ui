import clsx from 'clsx';
import { RecipeVariant } from 'lib/types';
import * as styles from './button.css';

type ButtonVariants = RecipeVariant<typeof styles.buttonRecipe, 'variant'>;

export interface ButtonProps {
  children: string;
  variant?: ButtonVariants;
  disabled?: boolean;
  onClick?: () => void;
  className?: string | string[];
}

export const Button = ({
  children,
  variant,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        styles.buttonStyle,
        styles.buttonRecipe({ variant: variant }),
        className,
      )}
    >
      {children}
    </button>
  );
};
