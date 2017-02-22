// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isBrowser = () => {
  return typeof window !== 'undefined';
};

export const isNotBrowser = createIsNotMethod(isBrowser);

export default isBrowser;
