// types
import isDate from './date';
import isNumber from './number';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isInQuarter = (object, quarterNumber) => {
  return isDate(object) && isNumber(quarterNumber)
    && quarterNumber === ~~((object.getMonth() / 3) + 2);
};

export const isNotInQuarter = createIsNotMethod(isInQuarter);

export default isInQuarter;
