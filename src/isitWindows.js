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

const isitWindows = ({appVersion = APP_VERSION} = NAVIGATOR) => {
  return isWindowsTest(appVersion);
};

export const isitAllWindows = createIsAllMethod(isitWindows);
export const isitAnyWindows = createIsAnyMethod(isitWindows);
export const isitNotWindows = createIsNotMethod(isitWindows);

export default isitWindows;
