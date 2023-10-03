'use client';

import { Provider } from 'jotai';

export const AtomsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Provider>{children}</Provider>;
};
