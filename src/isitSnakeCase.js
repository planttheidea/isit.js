// types
import isitString from './isitString';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';
import {
  toSnakeCase
} from './_internal/stringUtils';

const isitSnakeCase = (object) => {
  return isitString(object) && object.toLowerCase() === toSnakeCase(object);
};

export const isitAllSnakeCase = createIsAllMethod(isitSnakeCase);
export const isitAnySnakeCase = createIsAnyMethod(isitSnakeCase);
export const isitNotSnakeCase = createIsNotMethod(isitSnakeCase);

export default isitSnakeCase;
