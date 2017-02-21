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

const isitIpv6 = createRegExpTest(IPV6_ADDRESS_REGEXP);

export const isitAllIpv6 = createIsAllMethod(isitIpv6);
export const isitAnyIpv6 = createIsAnyMethod(isitIpv6);
export const isitNotIpv6 = createIsNotMethod(isitIpv6);

export default isitIpv6;
