// types
import isitString from './isitString';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';
import {
  toCamelCase
} from './_internal/stringUtils';

const isitCamelCase = (object) => {
  return isitString(object) && object === toCamelCase(object);
};

export const isitAllCamelCase = createIsAllMethod(isitCamelCase);
export const isitAnyCamelCase = createIsAnyMethod(isitCamelCase);
export const isitNotCamelCase = createIsNotMethod(isitCamelCase);

export default isitCamelCase;
