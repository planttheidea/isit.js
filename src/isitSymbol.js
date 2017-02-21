// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitSymbol = (object) => {
  return typeof object === 'symbol';
};

export const isitAllSymbol = createIsAllMethod(isitSymbol);
export const isitNotSymbol = createIsNotMethod(isitSymbol);
export const isitAnySymbol = createIsAnyMethod(isitSymbol);

export default isitSymbol;
