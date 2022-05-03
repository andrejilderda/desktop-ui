import React from 'react';

export interface WrapProps {
  if: boolean;
  with: (children: React.ReactNode) => JSX.Element;
  children: React.ReactNode;
}

export const Wrap = ({
  if: condition,
  with: wrapper,
  children,
  ...props
}: WrapProps) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, props);
    }

    return child;
  });

  return condition ? wrapper(childrenWithProps) : <>{childrenWithProps}</>;
};

export default Wrap;
