// constants
import {
  IPV4_ADDRESS_REGEXP
} from './_internal/regexpConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isitIpv4 = createRegExpTest(IPV4_ADDRESS_REGEXP);

export const isitAllIpv4 = createIsAllMethod(isitIpv4);
export const isitAnyIpv4 = createIsAnyMethod(isitIpv4);
export const isitNotIpv4 = createIsNotMethod(isitIpv4);

export default isitIpv4;
