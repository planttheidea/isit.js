// constants
import {
  APPLE_WEBKIT_REGEXP,
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

const isWebkitTest = createRegExpTest(APPLE_WEBKIT_REGEXP);

const isitWebkit = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isWebkitTest(userAgent);
};

export const isitAllWebkit = createIsAllMethod(isitWebkit);
export const isitAnyWebkit = createIsAnyMethod(isitWebkit);
export const isitNotWebkit = createIsNotMethod(isitWebkit);

export default isitWebkit;
