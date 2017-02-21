// types
import isitExisty from './isitExisty';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitDomNode = (object) => {
  return isitExisty(object) && object.nodeType > 0;
};

export const isitAllDomNode = createIsAllMethod(isitDomNode);
export const isitNotDomNode = createIsNotMethod(isitDomNode);
export const isitAnyDomNode = createIsAnyMethod(isitDomNode);

export default isitDomNode;
