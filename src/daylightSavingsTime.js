// types
import isDate from './date';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isDaylightSavingsTime = (object) => {
  if (!isDate(object)) {
    return false;
  }

  const objectYear = object.getFullYear();
  const january = new Date(objectYear, 0, 1);
  const july = new Date(objectYear, 6, 1);

  return object.getTimezoneOffset() < Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());
};

export const isAllDaylightSavingsTime = createIsAllMethod(isDaylightSavingsTime);
export const isAnyDaylightSavingsTime = createIsAnyMethod(isDaylightSavingsTime);
export const isNotDaylightSavingsTime = createIsNotMethod(isDaylightSavingsTime);

export default isDaylightSavingsTime;
