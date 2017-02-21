// constants
import {
  MSIE_REGEXP,
  NAVIGATOR,
  RV11_REGEXP,
  USER_AGENT,
  WINDOWS_NT_REGEXP
} from './_internal/environmentConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isMsieTest = createRegExpTest(MSIE_REGEXP);
const isRv11Test = createRegExpTest(RV11_REGEXP);
const isWindowsNtTest = createRegExpTest(WINDOWS_NT_REGEXP);

const isitIe = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isMsieTest(userAgent) || (isWindowsNtTest(userAgent) && isRv11Test(userAgent));
};

export const isitAllIe = createIsAllMethod(isitIe);
export const isitAnyIe = createIsAnyMethod(isitIe);
export const isitNotIe = createIsNotMethod(isitIe);

export default isitIe;
