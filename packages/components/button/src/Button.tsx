import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';
import * as styles from './button.css';

export interface ButtonProps {
  label: string;
  disabled: boolean;
  variants: RecipeVariants<typeof styles.buttonRecipe>;
  onClick?: () => void;
}

const Button = ({ label, variants = {}, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(styles.buttonStyle, styles.buttonRecipe(variants))}
    >
      {label}
    </button>
  );
};

export default Button;
