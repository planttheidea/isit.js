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

const isitIp = createRegExpTest(IP_ADDRESS_REGEXP);

export const isitAllIp = createIsAllMethod(isitIp);
export const isitAnyIp = createIsAnyMethod(isitIp);
export const isitNotIp = createIsNotMethod(isitIp);

export default isitIp;
