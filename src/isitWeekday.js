// types
import isitDate from './isitDate';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isitWeekday = (object) => {
  if (!isitDate(object)) {
    return false;
  }

  const day = object.getDay();

  return day !== 0 && day !== 6;
};

export const isitAllWeekday = createIsAllMethod(isitWeekday);
export const isitAnyWeekday = createIsAnyMethod(isitWeekday);
export const isitNotWeekday = createIsNotMethod(isitWeekday);

export default isitWeekday;
