// constants
import {
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

const isIpodTest = createRegExpTest(IPOD_REGEXP);

const isIpod = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isIpodTest(userAgent);
};

export const isAllIpod = createIsAllMethod(isIpod);
export const isAnyIpod = createIsAnyMethod(isIpod);
export const isNotIpod = createIsNotMethod(isIpod);

export default isIpod;
