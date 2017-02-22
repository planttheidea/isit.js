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

const isWebkit = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isWebkitTest(userAgent);
};

export const isAllWebkit = createIsAllMethod(isWebkit);
export const isAnyWebkit = createIsAnyMethod(isWebkit);
export const isNotWebkit = createIsNotMethod(isWebkit);

export default isWebkit;
