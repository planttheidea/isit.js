// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitFalsy = (object) => {
  return !object;
};

export const isitAllFalsy = createIsAllMethod(isitFalsy);
export const isitNotFalsy = createIsNotMethod(isitFalsy);
export const isitAnyFalsy = createIsAnyMethod(isitFalsy);

export default isitFalsy;
