// types
import isitNumber from './isitNumber';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isitLessThan = (object, minimumValue) => {
  return isitNumber(object) && isitNumber(minimumValue) && object < minimumValue;
};

export const isitNotLessThan = createIsNotMethod(isitLessThan);

export default isitLessThan;
