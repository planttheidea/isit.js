// types
import isSortedAsc from './sortedAsc';
import isSortedDesc from './sortedDesc';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isSorted = (object) => {
  return isSortedAsc(object) || isSortedDesc(object);
};

export const isAllSorted = createIsAllMethod(isSorted);
export const isAnySorted = createIsAnyMethod(isSorted);
export const isNotSorted = createIsNotMethod(isSorted);

export default isSorted;
