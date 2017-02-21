// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitNaN = (object) => {
  return object !== object;
};

export const isitAllNaN = createIsAllMethod(isitNaN);
export const isitNotNaN = createIsNotMethod(isitNaN);
export const isitAnyNaN = createIsAnyMethod(isitNaN);

export default isitNaN;
