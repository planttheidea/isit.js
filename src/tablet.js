// constants
import {
  NAVIGATOR,
  USER_AGENT
} from './_internal/environmentConstants';

// environment
import isAndroidTablet from './androidTablet';
import isIpad from './ipad';
import isWindowsTablet from './windowsTablet';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isTablet = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isIpad(userAgent) ||
    isAndroidTablet(userAgent) ||
    isWindowsTablet(userAgent);
};

export const isAllTablet = createIsAllMethod(isTablet);
export const isAnyTablet = createIsAnyMethod(isTablet);
export const isNotTablet = createIsNotMethod(isTablet);

export default isTablet;
