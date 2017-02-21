// types
import isitArray from './isitArray';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isitSortedDesc = (object) => {
  if (!isitArray(object)) {
    return false;
  }

  const shallowClone = [...object];
  const length = shallowClone.length;

  shallowClone.sort().reverse();

  let index = -1;

  while (++index < length) {
    if (object[index] !== shallowClone[index]) {
      return false;
    }
  }

  return true;
};

export const isitAllSortedDesc = createIsAllMethod(isitSortedDesc);
export const isitAnySortedDesc = createIsAnyMethod(isitSortedDesc);
export const isitNotSortedDesc = createIsNotMethod(isitSortedDesc);

export default isitSortedDesc;
