// types
import isDate from './date';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isWeekday = (object) => {
  if (!isDate(object)) {
    return false;
  }

  const day = object.getDay();

  return day !== 0 && day !== 6;
};

export const isAllWeekday = createIsAllMethod(isWeekday);
export const isAnyWeekday = createIsAnyMethod(isWeekday);
export const isNotWeekday = createIsNotMethod(isWeekday);

export default isWeekday;
