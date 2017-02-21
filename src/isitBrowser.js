// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isitBrowser = () => {
  return typeof window !== 'undefined';
};

export const isitNotBrowser = createIsNotMethod(isitBrowser);

export default isitBrowser;
