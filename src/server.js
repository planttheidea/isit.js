// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isServer = () => {
  return typeof window === 'undefined';
};

export const isNotServer = createIsNotMethod(isServer);

export default isServer;
