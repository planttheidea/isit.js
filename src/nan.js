// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isNaN = (object) => {
  return object !== object;
};

export const isAllNaN = createIsAllMethod(isNaN);
export const isNotNaN = createIsNotMethod(isNaN);
export const isAnyNaN = createIsAnyMethod(isNaN);

export default isNaN;
