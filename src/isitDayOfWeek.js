// constants
import {
  DAY_STRINGS
} from './_internal/timeConstants';

// types
import isitDate from './isitDate';
import isitNumber from './isitNumber';
import isitString from './isitString';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isitDayOfWeek = (object, day) => {
  const dayNumber = +day;

  return isitDate(object) && (
    (isitString(day) && day.toLowerCase() === DAY_STRINGS[object.getDay()]) ||
    (isitNumber(dayNumber) && dayNumber === object.getDay())
  );
};

export const isitNotDayOfWeek = createIsNotMethod(isitDayOfWeek);

export default isitDayOfWeek;
