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

const isitMap = (object) => {
  return toString(object) === getObjectClass('Map');
};

export const isitAllMap = createIsAllMethod(isitMap);
export const isitNotMap = createIsNotMethod(isitMap);
export const isitAnyMap = createIsAnyMethod(isitMap);

export default isitMap;
