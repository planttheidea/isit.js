// types
import isString from './string';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';
import {
  toKebabCase
} from './_internal/stringUtils';

const isKebabCase = (object) => {
  return isString(object) && object.toLowerCase() === toKebabCase(object);
};

export const isAllKebabCase = createIsAllMethod(isKebabCase);
export const isAnyKebabCase = createIsAnyMethod(isKebabCase);
export const isNotKebabCase = createIsNotMethod(isKebabCase);

export default isKebabCase;
