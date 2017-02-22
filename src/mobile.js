// constants
import {
  NAVIGATOR,
  USER_AGENT
} from './_internal/environmentConstants';

// environment
import isAndroidPhone from './androidPhone';
import isBlackberry from './blackberry';
import isIpod from './ipod';
import isIphone from './iphone';
import isWindowsPhone from './windowsPhone';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isMobile = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isIphone(userAgent) ||
    isAndroidPhone(userAgent) ||
    isWindowsPhone(userAgent) ||
    isIpod(userAgent) ||
    isBlackberry(userAgent);
};

export const isAllMobile = createIsAllMethod(isMobile);
export const isAnyMobile = createIsAnyMethod(isMobile);
export const isNotMobile = createIsNotMethod(isMobile);

export default isMobile;
