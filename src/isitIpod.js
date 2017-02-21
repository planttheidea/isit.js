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

const isitIpod = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isIpodTest(userAgent);
};

export const isitAllIpod = createIsAllMethod(isitIpod);
export const isitAnyIpod = createIsAnyMethod(isitIpod);
export const isitNotIpod = createIsNotMethod(isitIpod);

export default isitIpod;
