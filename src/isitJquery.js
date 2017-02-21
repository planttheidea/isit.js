// types
import {
  isitNotExisty
} from './isitExisty';
import isitFunction from './isitFunction';
import isitObject from './isitObject';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitJquery = (object) => {
  if (isitNotExisty(object)) {
    return false;
  }

  if (isitFunction(object)) {
    const $object = object();

    return isitObject($object) && !!$object.jquery;
  }

  return !!Object.getPrototypeOf(object).jquery;
};

export const isitAllJquery = createIsAllMethod(isitJquery);
export const isitNotJquery = createIsNotMethod(isitJquery);
export const isitAnyJquery = createIsAnyMethod(isitJquery);

export default isitJquery;
