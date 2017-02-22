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

const isWhitespaceTest = createRegExpTest(WHITESPACE_REGEXP);

const isWhitespace = (object) => {
  return isWhitespaceTest(object);
};

export const isAllWhitespace = createIsAllMethod(isWhitespace);
export const isNotWhitespace = createIsNotMethod(isWhitespace);
export const isAnyWhitespace = createIsAnyMethod(isWhitespace);

export default isWhitespace;
