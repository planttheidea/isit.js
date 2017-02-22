// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isFalsy = (object) => {
  return !object;
};

export const isAllFalsy = createIsAllMethod(isFalsy);
export const isNotFalsy = createIsNotMethod(isFalsy);
export const isAnyFalsy = createIsAnyMethod(isFalsy);

export default isFalsy;
