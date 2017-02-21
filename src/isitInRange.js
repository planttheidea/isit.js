// types
import isitNumber from './isitNumber';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isitInRange = (object, minimumValue, maximumValue) => {
  return isitNumber(object) && isitNumber(minimumValue) && isitNumber(maximumValue) &&
    object >= minimumValue && object <= maximumValue;
};

export const isitNotInRange = createIsNotMethod(isitInRange);

export default isitInRange;
