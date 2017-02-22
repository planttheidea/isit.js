// types
import isNumber from './number';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isInteger = (object) => {
  return isNumber(object) && object % 1 === 0;
};

export const isAllInteger = createIsAllMethod(isInteger);
export const isNotInteger = createIsNotMethod(isInteger);
export const isAnyInteger = createIsAnyMethod(isInteger);

export default isInteger;
