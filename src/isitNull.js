// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isitNull = (object) => {
  return object === null;
};

export const isitAllNull = createIsAllMethod(isitNull);
export const isitAnyNull = createIsAnyMethod(isitNull);
export const isitNotNull = createIsNotMethod(isitNull);

export default isitNull;
