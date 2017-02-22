// constants
import {
  DAY_STRINGS
} from './_internal/timeConstants';

// types
import isDate from './date';
import isNumber from './number';
import isString from './string';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isDay = (object, day) => {
  const dayNumber = +day;

  return isDate(object) && (
    (isString(day) && day.toLowerCase() === DAY_STRINGS[object.getDay()]) ||
    (isNumber(dayNumber) && dayNumber === object.getDay())
  );
};

export const isNotDay = createIsNotMethod(isDay);

export default isDay;
