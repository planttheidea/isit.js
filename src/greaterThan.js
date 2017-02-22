// types
import isNumber from './number';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

/**
 * @module greaterThan
 */

const isGreaterThan = (object, minimumValue) => {
  return isNumber(object) && isNumber(minimumValue) && object > minimumValue;
};

export const isNotGreaterThan = createIsNotMethod(isGreaterThan);

export default isGreaterThan;
