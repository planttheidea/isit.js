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

const isBoolean = (object) => {
  return object === true || object === false || toString(object) === getObjectClass('Boolean');
};

export const isAllBoolean = createIsAllMethod(isBoolean);
export const isNotBoolean = createIsNotMethod(isBoolean);
export const isAnyBoolean = createIsAnyMethod(isBoolean);

export default isBoolean;
