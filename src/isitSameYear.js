// types
import isitDate from './isitDate';
import isitNumber from './isitNumber';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isitSameYear = (object, year) => {
  const yearNumber = +year;

  return isitDate(object) && isitNumber(yearNumber) && yearNumber === object.getFullYear();
};

export const isitNotSameYear = createIsNotMethod(isitSameYear);

export default isitSameYear;
