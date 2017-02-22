// types
import isString from './string';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';
import {
  toSnakeCase
} from './_internal/stringUtils';

const isSnakeCase = (object) => {
  return isString(object) && object.toLowerCase() === toSnakeCase(object);
};

export const isAllSnakeCase = createIsAllMethod(isSnakeCase);
export const isAnySnakeCase = createIsAnyMethod(isSnakeCase);
export const isNotSnakeCase = createIsNotMethod(isSnakeCase);

export default isSnakeCase;
