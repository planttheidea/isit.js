// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitRegExp = (object) => {
  return object instanceof RegExp;
};

export const isitAllRegExp = createIsAllMethod(isitRegExp);
export const isitNotRegExp = createIsNotMethod(isitRegExp);
export const isitAnyRegExp = createIsAnyMethod(isitRegExp);

export default isitRegExp;
