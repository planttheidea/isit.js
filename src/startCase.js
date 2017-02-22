// types
import isString from './string';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';
import {
  toStartCase
} from './_internal/stringUtils';

const isStartCase = (object) => {
  return isString(object) && object === toStartCase(object);
};

export const isAllStartCase = createIsAllMethod(isStartCase);
export const isAnyStartCase = createIsAnyMethod(isStartCase);
export const isNotStartCase = createIsNotMethod(isStartCase);

export default isStartCase;
