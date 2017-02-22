// types
import isArray from './array';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isSortedAsc = (object) => {
  if (!isArray(object)) {
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

export const isAllSortedAsc = createIsAllMethod(isSortedAsc);
export const isAnySortedAsc = createIsAnyMethod(isSortedAsc);
export const isNotSortedAsc = createIsNotMethod(isSortedAsc);

export default isSortedAsc;
