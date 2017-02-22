// constants
import {
  APP_VERSION,
  LINUX_REGEXP,
  NAVIGATOR,
  UNIX_REGEXP
} from './_internal/environmentConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isLinuxTest = createRegExpTest(LINUX_REGEXP);
const isUnixTest = createRegExpTest(UNIX_REGEXP);

const isLinux = ({appVersion = APP_VERSION} = NAVIGATOR) => {
  return isLinuxTest(appVersion) || isUnixTest(appVersion);
};

export const isAllLinux = createIsAllMethod(isLinux);
export const isAnyLinux = createIsAnyMethod(isLinux);
export const isNotLinux = createIsNotMethod(isLinux);

export default isLinux;
