// types
import isitDate from './isitDate';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isitFuture = (object) => {
  return isitDate(object) && object.valueOf() > Date.now();
};

export const isitAllFuture = createIsAllMethod(isitFuture);
export const isitAnyFuture = createIsAnyMethod(isitFuture);
export const isitNotFuture = createIsNotMethod(isitFuture);

export default isitFuture;
