import { createContext } from 'react';

import type { LinkBaseComponent } from './link-base.types';

export const LinkContext = createContext<LinkBaseComponent | undefined>(
  undefined,
);
