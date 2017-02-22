// constants
import {
  DATE_STRING_REGEXP
} from './_internal/regexpConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isDateString = createRegExpTest(DATE_STRING_REGEXP);

export const isAllDateString = createIsAllMethod(isDateString);
export const isAnyDateString = createIsAnyMethod(isDateString);
export const isNotDateString = createIsNotMethod(isDateString);

export default isDateString;
