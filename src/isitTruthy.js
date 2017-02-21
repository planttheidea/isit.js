// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitTruthy = (object) => {
  return !!object;
};

export const isitAllTruthy = createIsAllMethod(isitTruthy);
export const isitNotTruthy = createIsNotMethod(isitTruthy);
export const isitAnyTruthy = createIsAnyMethod(isitTruthy);

export default isitTruthy;
