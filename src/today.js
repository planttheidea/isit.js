// types
import isSameDate from './sameDate';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isToday = (object) => {
  return isSameDate(object, new Date());
};

export const isAllToday = createIsAllMethod(isToday);
export const isAnyToday = createIsAnyMethod(isToday);
export const isNotToday = createIsNotMethod(isToday);

export default isToday;
