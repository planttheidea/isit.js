// constants
import {
  APPLE_COMPUTER_REGEXP,
  NAVIGATOR,
  SAFARI_REGEXP,
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

const isAppleComputerTest = createRegExpTest(APPLE_COMPUTER_REGEXP);
const isSafariTest = createRegExpTest(SAFARI_REGEXP);

const isSafari = ({userAgent = USER_AGENT, vendor = VENDOR} = NAVIGATOR) => {
  return isSafariTest(userAgent) && isAppleComputerTest(vendor);
};

export const isAllSafari = createIsAllMethod(isSafari);
export const isAnySafari = createIsAnyMethod(isSafari);
export const isNotSafari = createIsNotMethod(isSafari);

export default isSafari;
