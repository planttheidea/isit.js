// constants
import {
  NAVIGATOR,
  USER_AGENT
} from './_internal/environmentConstants';

// environment
import isitAndroidPhone from './isitAndroidPhone';
import isitBlackberry from './isitBlackberry';
import isitIpod from './isitIpod';
import isitIphone from './isitIphone';
import isitWindowsPhone from './isitWindowsPhone';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isitMobile = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isitIphone(userAgent) ||
    isitAndroidPhone(userAgent) ||
    isitWindowsPhone(userAgent) ||
    isitIpod(userAgent) ||
    isitBlackberry(userAgent);
};

export const isitAllMobile = createIsAllMethod(isitMobile);
export const isitAnyMobile = createIsAnyMethod(isitMobile);
export const isitNotMobile = createIsNotMethod(isitMobile);

export default isitMobile;
