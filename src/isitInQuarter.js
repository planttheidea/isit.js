// types
import isitDate from './isitDate';
import isitNumber from './isitNumber';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isitInQuarter = (object, quarterNumber) => {
  return isitDate(object) && isitNumber(quarterNumber)
    && quarterNumber === ~~((object.getQuarter() + 3) / 3);
};

export const isitNotInQuarter = createIsNotMethod(isitInQuarter);

export default isitInQuarter;
