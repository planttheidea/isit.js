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

const isSet = (object) => {
  return toString(object) === getObjectClass('Set');
};

export const isAllSet = createIsAllMethod(isSet);
export const isNotSet = createIsNotMethod(isSet);
export const isAnySet = createIsAnyMethod(isSet);

export default isSet;
