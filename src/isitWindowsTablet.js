// constants
import {
  APP_VERSION,
  NAVIGATOR,
  TOUCH_REGEXP,
  USER_AGENT
} from './_internal/environmentConstants';

// environment
import isitWindows from './isitWindows';
import isitWindowsPhone from './isitWindowsPhone';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isTouchTest = createRegExpTest(TOUCH_REGEXP);

const isitWindowsTablet = ({appVersion = APP_VERSION, userAgent = USER_AGENT} = NAVIGATOR) => {
  return isitWindows({appVersion, userAgent}) && !isitWindowsPhone({appVersion, userAgent}) && isTouchTest(appVersion);
};

export const isitAllWindowsTablet = createIsAllMethod(isitWindowsTablet);
export const isitAnyWindowsTablet = createIsAnyMethod(isitWindowsTablet);
export const isitNotWindowsTablet = createIsNotMethod(isitWindowsTablet);

export default isitWindowsTablet;
