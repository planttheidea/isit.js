// types
import isDate from './date';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isFuture = (object) => {
  return isDate(object) && object.valueOf() > Date.now();
};

export const isAllFuture = createIsAllMethod(isFuture);
export const isAnyFuture = createIsAnyMethod(isFuture);
export const isNotFuture = createIsNotMethod(isFuture);

export default isFuture;
