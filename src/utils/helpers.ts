export const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: {
  condition: boolean;
  wrapper: (child: JSX.Element) => JSX.Element;
  children: JSX.Element;
}): JSX.Element => (condition ? wrapper(children) : children);
