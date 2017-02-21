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

const isitIphone = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isIphoneTest(userAgent) && !isIpodTest(userAgent);
};

export const isitAllIphone = createIsAllMethod(isitIphone);
export const isitAnyIphone = createIsAnyMethod(isitIphone);
export const isitNotIphone = createIsNotMethod(isitIphone);

export default isitIphone;
