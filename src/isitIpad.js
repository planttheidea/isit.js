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

const isitIpad = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isIpadTest(userAgent);
};

export const isitAllIpad = createIsAllMethod(isitIpad);
export const isitAnyIpad = createIsAnyMethod(isitIpad);
export const isitNotIpad = createIsNotMethod(isitIpad);

export default isitIpad;
