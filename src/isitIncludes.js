// types
import isitArray from './isitArray';
import isitString from './isitString';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isitIncludes = (object, item) => {
  return (isitArray(object) || (isitString(object) && isitString(item))) && !!~object.indexOf(item);
};

export const isitNotIncludes = createIsNotMethod(isitIncludes);

export default isitIncludes;
