// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isSymbol = (object) => {
  return typeof object === 'symbol';
};

export const isAllSymbol = createIsAllMethod(isSymbol);
export const isNotSymbol = createIsNotMethod(isSymbol);
export const isAnySymbol = createIsAnyMethod(isSymbol);

export default isSymbol;
