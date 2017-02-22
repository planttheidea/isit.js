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

const isTimeString = createRegExpTest(TIME_STRING_REGEXP);

export const isAllTimeString = createIsAllMethod(isTimeString);
export const isAnyTimeString = createIsAnyMethod(isTimeString);
export const isNotTimeString = createIsNotMethod(isTimeString);

export default isTimeString;
