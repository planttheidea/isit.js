// types
import isitArray from './isitArray';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isitSortedAsc = (object) => {
  if (!isitArray(object)) {
    return false;
  }

  const shallowClone = [...object];
  const length = shallowClone.length;

  shallowClone.sort();

  let index = -1;

  while (++index < length) {
    if (object[index] !== shallowClone[index]) {
      return false;
    }
  }

  return true;
};

export const isitAllSortedAsc = createIsAllMethod(isitSortedAsc);
export const isitAnySortedAsc = createIsAnyMethod(isitSortedAsc);
export const isitNotSortedAsc = createIsNotMethod(isitSortedAsc);

export default isitSortedAsc;
