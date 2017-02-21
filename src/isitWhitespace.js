// constants
import {
  WHITESPACE_REGEXP
} from './_internal/stringConstants';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isWhitespace = createRegExpTest(WHITESPACE_REGEXP);

const isitWhitespace = (object) => {
  return isWhitespace(object);
};

export const isitAllWhitespace = createIsAllMethod(isitWhitespace);
export const isitNotWhitespace = createIsNotMethod(isitWhitespace);
export const isitAnyWhitespace = createIsAnyMethod(isitWhitespace);

export default isitWhitespace;
