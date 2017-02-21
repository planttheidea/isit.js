// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';
import {
  toString
} from './_internal/typeUtils';

const isitSameType = (object1, object2) => {
  return toString(object1) === toString(object2);
};

export const isitNotSameType = createIsNotMethod(isitSameType);

export default isitSameType;
