// types
import isitString from './isitString';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';
import {
  toKebabCase
} from './_internal/stringUtils';

const isitKebabCase = (object) => {
  return isitString(object) && object.toLowerCase() === toKebabCase(object);
};

export const isitAllKebabCase = createIsAllMethod(isitKebabCase);
export const isitAnyKebabCase = createIsAnyMethod(isitKebabCase);
export const isitNotKebabCase = createIsNotMethod(isitKebabCase);

export default isitKebabCase;
