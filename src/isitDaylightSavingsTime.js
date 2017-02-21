// types
import isitDate from './isitDate';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isitDaylightSavingsTime = (object) => {
  if (!isitDate(object)) {
    return false;
  }

  const objectYear = object.getFullYear();
  const january = new Date(objectYear, 0, 1);
  const july = new Date(objectYear, 6, 1);

  return object.getTimezoneOffset() < Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());
};

export const isitAllDaylightSavingsTime = createIsAllMethod(isitDaylightSavingsTime);
export const isitAnyDaylightSavingsTime = createIsAnyMethod(isitDaylightSavingsTime);
export const isitNotDaylightSavingsTime = createIsNotMethod(isitDaylightSavingsTime);

export default isitDaylightSavingsTime;
