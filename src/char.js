// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

// types
import isString from './string';

const isChar = (object) => {
  return isString(object) && object.length === 1;
};

export const isAllChar = createIsAllMethod(isChar);
export const isNotChar = createIsNotMethod(isChar);
export const isAnyChar = createIsAnyMethod(isChar);

export default isChar;
