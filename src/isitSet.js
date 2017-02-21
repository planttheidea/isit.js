// type
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';
import {
  getObjectClass,
  toString
} from './_internal/typeUtils';

const isitSet = (object) => {
  return toString(object) === getObjectClass('Set');
};

export const isitAllSet = createIsAllMethod(isitSet);
export const isitNotSet = createIsNotMethod(isitSet);
export const isitAnySet = createIsAnyMethod(isitSet);

export default isitSet;
