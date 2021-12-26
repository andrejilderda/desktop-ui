import { ReactNode } from 'react';

export interface PseudoProps {
  children: ReactNode;
  state: 'hover' | 'active' | 'focus-visible';
}

const Pseudo = ({ state, children }: PseudoProps) => (
  <div className={`pseudo-${state}`}>{children}</div>
);

export default Pseudo;
