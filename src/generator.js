// types
import isFunction from './function';

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

const isGenerator = (object) => {
  return isFunction(object) && toString(object) === getObjectClass('GeneratorFunction');
};

export const isAllGenerator = createIsAllMethod(isGenerator);
export const isNotGenerator = createIsNotMethod(isGenerator);
export const isAnyGenerator = createIsAnyMethod(isGenerator);

export default isGenerator;
