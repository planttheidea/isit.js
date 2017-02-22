// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isFunction = (object) => {
  return typeof object === 'function';
};

export const isAllFunction = createIsAllMethod(isFunction);
export const isNotFunction = createIsNotMethod(isFunction);
export const isAnyFunction = createIsAnyMethod(isFunction);

export default isFunction;
