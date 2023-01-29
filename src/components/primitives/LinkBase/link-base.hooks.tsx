import { useContext } from 'react';

import { LinkContext } from './link-base.context';

export function useLink() {
  return useContext(LinkContext);
}
