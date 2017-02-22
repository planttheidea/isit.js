// constants
import {
  IP_ADDRESS_REGEXP
} from './_internal/regexpConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isIp = createRegExpTest(IP_ADDRESS_REGEXP);

export const isAllIp = createIsAllMethod(isIp);
export const isAnyIp = createIsAnyMethod(isIp);
export const isNotIp = createIsNotMethod(isIp);

export default isIp;
