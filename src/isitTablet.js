// constants
import {
  NAVIGATOR,
  USER_AGENT
} from './_internal/environmentConstants';

// environment
import isitAndroidTablet from './isitAndroidTablet';
import isitIpad from './isitIpad';
import isitWindowsTablet from './isitWindowsTablet';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isitTablet = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isitIpad(userAgent) ||
    isitAndroidTablet(userAgent) ||
    isitWindowsTablet(userAgent);
};

export const isitAllTablet = createIsAllMethod(isitTablet);
export const isitAnyTablet = createIsAnyMethod(isitTablet);
export const isitNotTablet = createIsNotMethod(isitTablet);

export default isitTablet;
