// types
import isNumber from './number';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isNegative = (object) => {
  return isNumber(object) && object < 0;
};

export const isAllNegative = createIsAllMethod(isNegative);
export const isNotNegative = createIsNotMethod(isNegative);
export const isAnyNegative = createIsAnyMethod(isNegative);

export default isNegative;
