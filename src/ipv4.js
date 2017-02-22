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

const isIpv4 = createRegExpTest(IPV4_ADDRESS_REGEXP);

export const isAllIpv4 = createIsAllMethod(isIpv4);
export const isAnyIpv4 = createIsAnyMethod(isIpv4);
export const isNotIpv4 = createIsNotMethod(isIpv4);

export default isIpv4;
