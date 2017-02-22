// types
import isEqual from './equal';
import isString from './string';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isCapitalized = (object) => {
  if (!isString(object)) {
    return false;
  }

  const words = object.split(' ');
  const capitalizedWords = words.map((word) => {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  });

  return isEqual(words, capitalizedWords);
};

export const isAllCapitalized = createIsAllMethod(isCapitalized);
export const isAnyCapitalized = createIsAnyMethod(isCapitalized);
export const isNotCapitalized = createIsNotMethod(isCapitalized);

export default isCapitalized;
