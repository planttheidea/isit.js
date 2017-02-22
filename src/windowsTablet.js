// constants
import {
  APP_VERSION,
  NAVIGATOR,
  TOUCH_REGEXP,
  USER_AGENT
} from './_internal/environmentConstants';

// environment
import isWindows from './windows';
import isWindowsPhone from './windowsPhone';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isTouchTest = createRegExpTest(TOUCH_REGEXP);

const isWindowsTablet = ({appVersion = APP_VERSION, userAgent = USER_AGENT} = NAVIGATOR) => {
  return isWindows({appVersion, userAgent}) && !isWindowsPhone({appVersion, userAgent}) && isTouchTest(appVersion);
};

export const isAllWindowsTablet = createIsAllMethod(isWindowsTablet);
export const isAnyWindowsTablet = createIsAnyMethod(isWindowsTablet);
export const isNotWindowsTablet = createIsNotMethod(isWindowsTablet);

export default isWindowsTablet;
