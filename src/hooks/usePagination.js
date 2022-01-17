import { useMemo } from 'react';
import { getPagesCountArray } from '../utils/pages';

export const usePaginationRange = (total) => {
  return useMemo(() => {
    return getPagesCountArray(total)
  }, [total])
}
