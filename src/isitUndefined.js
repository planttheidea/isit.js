// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isitUndefined = (object) => {
  return object === void 0;
};

export const isitAllUndefined = createIsAllMethod(isitUndefined);
export const isitAnyUndefined = createIsAnyMethod(isitUndefined);
export const isitNotUndefined = createIsNotMethod(isitUndefined);

export default isitUndefined;
