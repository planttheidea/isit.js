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

const isMap = (object) => {
  return toString(object) === getObjectClass('Map');
};

export const isAllMap = createIsAllMethod(isMap);
export const isNotMap = createIsNotMethod(isMap);
export const isAnyMap = createIsAnyMethod(isMap);

export default isMap;
