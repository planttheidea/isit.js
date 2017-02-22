// types
import isNumber from './number';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isPositive = (object) => {
  return isNumber(object) && object > 0;
};

export const isAllPositive = createIsAllMethod(isPositive);
export const isNotPositive = createIsNotMethod(isPositive);
export const isAnyPositive = createIsAnyMethod(isPositive);

export default isPositive;
