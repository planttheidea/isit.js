// types
import isNumber from './number';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isOdd = (object) => {
  return isNumber(object) && object % 2 === 1;
};

export const isAllOdd = createIsAllMethod(isOdd);
export const isNotOdd = createIsNotMethod(isOdd);
export const isAnyOdd = createIsAnyMethod(isOdd);

export default isOdd;
