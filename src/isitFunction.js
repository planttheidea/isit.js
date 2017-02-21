// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitFunction = (object) => {
  return typeof object === 'function';
};

export const isitAllFunction = createIsAllMethod(isitFunction);
export const isitNotFunction = createIsNotMethod(isitFunction);
export const isitAnyFunction = createIsAnyMethod(isitFunction);

export default isitFunction;
