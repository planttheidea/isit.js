// types
import isDate from './date';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isPast = (object) => {
  return isDate(object) && object.valueOf() < Date.now();
};

export const isAllPast = createIsAllMethod(isPast);
export const isAnyPast = createIsAnyMethod(isPast);
export const isNotPast = createIsNotMethod(isPast);

export default isPast;
