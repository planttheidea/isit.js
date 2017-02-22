// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isTruthy = (object) => {
  return !!object;
};

export const isAllTruthy = createIsAllMethod(isTruthy);
export const isNotTruthy = createIsNotMethod(isTruthy);
export const isAnyTruthy = createIsAnyMethod(isTruthy);

export default isTruthy;
