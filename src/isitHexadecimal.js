// constants
import {
  HEXADECIMAL_REGEXP
} from './_internal/regexpConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isitHexadecimal = createRegExpTest(HEXADECIMAL_REGEXP);

export const isitAllHexadecimal = createIsAllMethod(isitHexadecimal);
export const isitAnyHexadecimal = createIsAnyMethod(isitHexadecimal);
export const isitNotHexadecimal = createIsNotMethod(isitHexadecimal);

export default isitHexadecimal;
