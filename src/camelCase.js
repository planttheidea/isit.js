// types
import isString from './string';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';
import {
  toCamelCase
} from './_internal/stringUtils';

const isCamelCase = (object) => {
  return isString(object) && object === toCamelCase(object);
};

export const isAllCamelCase = createIsAllMethod(isCamelCase);
export const isAnyCamelCase = createIsAnyMethod(isCamelCase);
export const isNotCamelCase = createIsNotMethod(isCamelCase);

export default isCamelCase;
