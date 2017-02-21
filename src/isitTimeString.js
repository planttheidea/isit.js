// constants
import {
  TIME_STRING_REGEXP
} from './_internal/regexpConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isitTimeString = createRegExpTest(TIME_STRING_REGEXP);

export const isitAllTimeString = createIsAllMethod(isitTimeString);
export const isitAnyTimeString = createIsAnyMethod(isitTimeString);
export const isitNotTimeString = createIsNotMethod(isitTimeString);

export default isitTimeString;
