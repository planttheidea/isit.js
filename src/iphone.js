// constants
import {
  IPHONE_REGEXP,
  IPOD_REGEXP,
  NAVIGATOR,
  USER_AGENT
} from './_internal/environmentConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isIphoneTest = createRegExpTest(IPHONE_REGEXP);
const isIpodTest = createRegExpTest(IPOD_REGEXP);

const isIphone = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isIphoneTest(userAgent) && !isIpodTest(userAgent);
};

export const isAllIphone = createIsAllMethod(isIphone);
export const isAnyIphone = createIsAnyMethod(isIphone);
export const isNotIphone = createIsNotMethod(isIphone);

export default isIphone;
