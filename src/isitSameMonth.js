// constants
import {
  MONTH_STRINGS
} from './_internal/timeConstants';

// types
import isitDate from './isitDate';
import isitNumber from './isitNumber';
import isitString from './isitString';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isitSameMonth = (object, month) => {
  const monthNumber = +month;

  return isitDate(object) && (
    (isitString(month) && month.toLowerCase() === MONTH_STRINGS[object.getMonth()]) ||
    (isitNumber(monthNumber) && monthNumber === object.getMonth())
  );
};

export const isitNotSameMonth = createIsNotMethod(isitSameMonth);

export default isitSameMonth;
