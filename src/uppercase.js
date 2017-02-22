// types
import isString from './string';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isUpperCase = (object) => {
  return isString(object) && object === object.toUpperCase();
};

export const isAllUpperCase = createIsAllMethod(isUpperCase);
export const isAnyUpperCase = createIsAnyMethod(isUpperCase);
export const isNotUpperCase = createIsNotMethod(isUpperCase);

export default isUpperCase;
