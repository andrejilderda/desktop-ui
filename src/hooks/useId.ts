import { useState } from 'react';
import { useIsomorphicEffect } from 'rooks';
import { classNamePrefix } from 'src/constants/styles';

// generate pseudo-random, but good enough id's
export function useId(staticId?: string) {
  const [id, setId] = useState('');
  Math.random().toString(36).substr(2, 9);
  useIsomorphicEffect(() => {
    setId(`${classNamePrefix}-${Math.random().toString(36).substr(2, 9)}`);
  }, []);

  return staticId || id;
}
