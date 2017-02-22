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

const isDate = (object) => {
  return toString(object) === getObjectClass('Date');
};

export const isAllDate = createIsAllMethod(isDate);
export const isNotDate = createIsNotMethod(isDate);
export const isAnyDate = createIsAnyMethod(isDate);

export default isDate;
