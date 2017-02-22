// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isNull = (object) => {
  return object === null;
};

export const isAllNull = createIsAllMethod(isNull);
export const isAnyNull = createIsAnyMethod(isNull);
export const isNotNull = createIsNotMethod(isNull);

export default isNull;
