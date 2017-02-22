// types
import isNumber from './number';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isDecimal = (object) => {
  return isNumber(object) && object % 1 !== 0;
};

export const isAllDecimal = createIsAllMethod(isDecimal);
export const isNotDecimal = createIsNotMethod(isDecimal);
export const isAnyDecimal = createIsAnyMethod(isDecimal);

export default isDecimal;
