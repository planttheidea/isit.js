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

const isHexadecimal = createRegExpTest(HEXADECIMAL_REGEXP);

export const isAllHexadecimal = createIsAllMethod(isHexadecimal);
export const isAnyHexadecimal = createIsAnyMethod(isHexadecimal);
export const isNotHexadecimal = createIsNotMethod(isHexadecimal);

export default isHexadecimal;
