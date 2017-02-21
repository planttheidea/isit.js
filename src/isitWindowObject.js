// types
import isitNull from './isitNull';
import isitObject from './isitObject';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitWindowObject = (object) => {
  return isitObject(object) && !isitNull(object) && object.window === object;
};

export const isitAllWindowObject = createIsAllMethod(isitWindowObject);
export const isitNotWindowObject = createIsNotMethod(isitWindowObject);
export const isitAnyWindowObject = createIsAnyMethod(isitWindowObject);

export default isitWindowObject;
