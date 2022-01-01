import { classNamePrefix } from 'src/constants/styles';

export const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: {
  condition: boolean;
  wrapper: (child: JSX.Element) => JSX.Element;
  children: JSX.Element;
}): JSX.Element => (condition ? wrapper(children) : children);

// Returns nested custom properties for fallbacks, like:
// `var(--rd--strokeActive, var(--rd--strokeDisabled, var(--rd--strokeHover, var(--stroke))))`
export const composeVars = (props: string[]) => {
  return [...props].reverse().reduce((acc, variable, index) => {
    if (index === 0) return variable;

    // Stitches doesn't allow a custom property fallback, so we construct our
    // own classname
    return `var(--${classNamePrefix}--${variable.replaceAll(
      '$$',
      '',
    )}, ${acc})`;
  }, '');
};
