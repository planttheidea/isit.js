// constants
import {
  DOUBLE_BYTE_REGEXP
} from './_internal/stringConstants';

// types
import isString from './string';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isDoubleByteTest = createRegExpTest(DOUBLE_BYTE_REGEXP);

const isDoubleByte = (object) => {
  return isString(object) && isDoubleByteTest(object);
};

export const isAllDoubleByte = createIsAllMethod(isDoubleByte);
export const isAnyDoubleByte = createIsAnyMethod(isDoubleByte);
export const isNotDoubleByte = createIsNotMethod(isDoubleByte);

export default isDoubleByte;
