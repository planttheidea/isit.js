// constants
import {
  DOUBLE_BYTE_REGEXP
} from './_internal/stringConstants';

// types
import isitString from './isitString';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isDoubleByteTest = createRegExpTest(DOUBLE_BYTE_REGEXP);

const isitDoubleByte = (object) => {
  return isitString(object) && isDoubleByteTest(object);
};

export const isitAllDoubleByte = createIsAllMethod(isitDoubleByte);
export const isitAnyDoubleByte = createIsAnyMethod(isitDoubleByte);
export const isitNotDoubleByte = createIsNotMethod(isitDoubleByte);

export default isitDoubleByte;
