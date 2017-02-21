// types
import isitFunction from './isitFunction';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';
import {
  getObjectClass,
  toString
} from './_internal/typeUtils';

const isitGenerator = (object) => {
  return isitFunction(object) && toString(object) === getObjectClass('GeneratorFunction');
};

export const isitAllGenerator = createIsAllMethod(isitGenerator);
export const isitNotGenerator = createIsNotMethod(isitGenerator);
export const isitAnyGenerator = createIsAnyMethod(isitGenerator);

export default isitGenerator;
