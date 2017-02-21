// constants
import {
  CHROME_OR_CHROMIUM_REGEXP,
  GOOGLE_INC_REGEXP,
  NAVIGATOR,
  USER_AGENT,
  VENDOR
} from './_internal/environmentConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isChromeTest = createRegExpTest(CHROME_OR_CHROMIUM_REGEXP);
const isGoogleTest = createRegExpTest(GOOGLE_INC_REGEXP);

const isitChrome = ({userAgent = USER_AGENT, vendor = VENDOR} = NAVIGATOR) => {
  return isChromeTest(userAgent) && isGoogleTest(vendor);
};

export const isitAllChrome = createIsAllMethod(isitChrome);
export const isitAnyChrome = createIsAnyMethod(isitChrome);
export const isitNotChrome = createIsNotMethod(isitChrome);

export default isitChrome;
