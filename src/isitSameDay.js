// types
import isitDate from './isitDate';
import isitNumber from './isitNumber';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isitSameDay = (object, day) => {
  const dayNumber = +day;

  return isitDate(object) && isitNumber(dayNumber) && dayNumber === object.getDate();
};

export const isitNotSameDay = createIsNotMethod(isitSameDay);

export default isitSameDay;
