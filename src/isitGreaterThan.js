// types
import isitNumber from './isitNumber';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isitGreaterThan = (object, minimumValue) => {
  return isitNumber(object) && isitNumber(minimumValue) && object > minimumValue;
};

export const isitNotGreaterThan = createIsNotMethod(isitGreaterThan);

export default isitGreaterThan;
