// types
import isString from './string';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isLowerCase = (object) => {
  return isString(object) && object === object.toLowerCase();
};

export const isAllLowerCase = createIsAllMethod(isLowerCase);
export const isAnyLowerCase = createIsAnyMethod(isLowerCase);
export const isNotLowerCase = createIsNotMethod(isLowerCase);

export default isLowerCase;
