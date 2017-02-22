// constants
import {
  IPV6_ADDRESS_REGEXP
} from './_internal/regexpConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isIpv6 = createRegExpTest(IPV6_ADDRESS_REGEXP);

export const isAllIpv6 = createIsAllMethod(isIpv6);
export const isAnyIpv6 = createIsAnyMethod(isIpv6);
export const isNotIpv6 = createIsNotMethod(isIpv6);

export default isIpv6;
