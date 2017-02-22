// constants
import {
  APP_VERSION,
  NAVIGATOR,
  WIN_REGEXP
} from './_internal/environmentConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isWindowsTest = createRegExpTest(WIN_REGEXP);

const isWindows = ({appVersion = APP_VERSION} = NAVIGATOR) => {
  return isWindowsTest(appVersion);
};

export const isAllWindows = createIsAllMethod(isWindows);
export const isAnyWindows = createIsAnyMethod(isWindows);
export const isNotWindows = createIsNotMethod(isWindows);

export default isWindows;
