// constants
import {
  APP_VERSION,
  NAVIGATOR,
  PHONE_REGEXP,
  USER_AGENT,
  WINDOWS_MOBILE_REGEXP
} from './_internal/environmentConstants';

// environment
import isitWindows from './isitWindows';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isPhoneTest = createRegExpTest(PHONE_REGEXP);
const isModernWindowsMobileTest = createRegExpTest(WINDOWS_MOBILE_REGEXP);

const isitWindowsPhone = ({appVersion = APP_VERSION, userAgent = USER_AGENT} = NAVIGATOR) => {
  return isitWindows({appVersion}) && (isPhoneTest(userAgent) || isModernWindowsMobileTest(userAgent));
};

export const isitAllWindowsPhone = createIsAllMethod(isitWindowsPhone);
export const isitAnyWindowsPhone = createIsAnyMethod(isitWindowsPhone);
export const isitNotWindowsPhone = createIsNotMethod(isitWindowsPhone);

export default isitWindowsPhone;
