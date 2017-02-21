// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isitServer = () => {
  return typeof window === 'undefined';
};

export const isitNotServer = createIsNotMethod(isitServer);

export default isitServer;
