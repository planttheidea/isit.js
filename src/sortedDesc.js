// types
import isArray from './array';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isSortedDesc = (object) => {
  if (!isArray(object)) {
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

export const isAllSortedDesc = createIsAllMethod(isSortedDesc);
export const isAnySortedDesc = createIsAnyMethod(isSortedDesc);
export const isNotSortedDesc = createIsNotMethod(isSortedDesc);

export default isSortedDesc;
