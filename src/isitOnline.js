// constants
import {
  NAVIGATOR
} from './_internal/environmentConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isitOnline = ({onLine} = NAVIGATOR) => {
  return !!onLine;
};

export const isitAllOnline = createIsAllMethod(isitOnline);
export const isitAnyOnline = createIsAnyMethod(isitOnline);
export const isitNotOnline = createIsNotMethod(isitOnline);

export default isitOnline;
