// constants
import {
  APP_VERSION,
  NAVIGATOR,
  PHONE_REGEXP,
  USER_AGENT,
  WINDOWS_MOBILE_REGEXP
} from './_internal/environmentConstants';

// environment
import isWindows from './windows';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isPhoneTest = createRegExpTest(PHONE_REGEXP);
const isModernWindowsMobileTest = createRegExpTest(WINDOWS_MOBILE_REGEXP);

const isWindowsPhone = ({appVersion = APP_VERSION, userAgent = USER_AGENT} = NAVIGATOR) => {
  return isWindows({appVersion}) && (isPhoneTest(userAgent) || isModernWindowsMobileTest(userAgent));
};

export const isAllWindowsPhone = createIsAllMethod(isWindowsPhone);
export const isAnyWindowsPhone = createIsAnyMethod(isWindowsPhone);
export const isNotWindowsPhone = createIsNotMethod(isWindowsPhone);

export default isWindowsPhone;
