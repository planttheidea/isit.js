// compose
import {
  matchAny
} from './compose';

// constants
import {
  NAVIGATOR,
  USER_AGENT
} from './_internal/environmentConstants';

// environment
import isitIe from './isitIe';

// utils
import {
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const createCaseInsensitiveRegexp = (string) => {
  return new RegExp(string, 'i');
};

const createIsMatchingVersion = (version) => {
  const msieRegexp = createCaseInsensitiveRegexp(`msie ${version}`);
  const rvRegexp = createCaseInsensitiveRegexp(`rv:${version}`);

  return matchAny(createRegExpTest(msieRegexp), createRegExpTest(rvRegexp));
};

const isitIeVersion = (version, {userAgent = USER_AGENT} = NAVIGATOR) => {
  const isMatchingVersion = createIsMatchingVersion(version);

  return !!version && isitIe({userAgent}) && isMatchingVersion(userAgent);
};

export const isitNotIeVersion = createIsNotMethod(isitIeVersion);

export default isitIeVersion;
