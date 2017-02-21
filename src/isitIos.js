// constants
import {
  NAVIGATOR,
  USER_AGENT
} from './_internal/environmentConstants';

// environment
import isitIpad from './isitIpad';
import isitIpod from './isitIpod';
import isitIphone from './isitIphone';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isitIos = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isitIphone(userAgent) || isitIpad(userAgent) || isitIpod(userAgent);
};

export const isitAllIos = createIsAllMethod(isitIos);
export const isitAnyIos = createIsAnyMethod(isitIos);
export const isitNotIos = createIsNotMethod(isitIos);

export default isitIos;
