// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isUndefined = (object) => {
  return object === void 0;
};

export const isAllUndefined = createIsAllMethod(isUndefined);
export const isAnyUndefined = createIsAnyMethod(isUndefined);
export const isNotUndefined = createIsNotMethod(isUndefined);

export default isUndefined;
