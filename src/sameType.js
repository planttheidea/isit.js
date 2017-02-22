// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';
import {
  toString
} from './_internal/typeUtils';

const isSameType = (object1, object2) => {
  return toString(object1) === toString(object2);
};

export const isNotSameType = createIsNotMethod(isSameType);

export default isSameType;
