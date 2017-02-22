// constants
import {
  IPAD_REGEXP,
  NAVIGATOR,
  USER_AGENT
} from './_internal/environmentConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isIpadTest = createRegExpTest(IPAD_REGEXP);

const isIpad = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isIpadTest(userAgent);
};

export const isAllIpad = createIsAllMethod(isIpad);
export const isAnyIpad = createIsAnyMethod(isIpad);
export const isNotIpad = createIsNotMethod(isIpad);

export default isIpad;
