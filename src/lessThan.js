// types
import isNumber from './number';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isLessThan = (object, minimumValue) => {
  return isNumber(object) && isNumber(minimumValue) && object < minimumValue;
};

export const isNotLessThan = createIsNotMethod(isLessThan);

export default isLessThan;
