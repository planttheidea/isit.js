// types
import isitNumber from './isitNumber';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitInteger = (object) => {
  return isitNumber(object) && object % 1 === 0;
};

export const isitAllInteger = createIsAllMethod(isitInteger);
export const isitNotInteger = createIsNotMethod(isitInteger);
export const isitAnyInteger = createIsAnyMethod(isitInteger);

export default isitInteger;
