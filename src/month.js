// constants
import {
  MONTH_STRINGS
} from './_internal/timeConstants';

// types
import isDate from './date';
import isNumber from './number';
import isString from './string';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isMonth = (object, month) => {
  const monthNumber = +month;

  return isDate(object) && (
    (isString(month) && month.toLowerCase() === MONTH_STRINGS[object.getMonth()]) ||
    (isNumber(monthNumber) && monthNumber === object.getMonth())
  );
};

export const isNotMonth = createIsNotMethod(isMonth);

export default isMonth;
