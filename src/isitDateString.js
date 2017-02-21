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

const isitDateString = createRegExpTest(DATE_STRING_REGEXP);

export const isitAllDateString = createIsAllMethod(isitDateString);
export const isitAnyDateString = createIsAnyMethod(isitDateString);
export const isitNotDateString = createIsNotMethod(isitDateString);

export default isitDateString;
