// constants
import {
  NAVIGATOR
} from './_internal/environmentConstants';

// environment
import isitOnline from './isitOnline';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isitOffline = (navigator = NAVIGATOR) => {
  return !isitOnline(navigator);
};

export const isitAllOffline = createIsAllMethod(isitOffline);
export const isitAnyOffline = createIsAnyMethod(isitOffline);
export const isitNotOffline = createIsNotMethod(isitOffline);

export default isitOffline;
