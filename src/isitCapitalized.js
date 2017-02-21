// types
import isitEqual from './isitEqual';
import isitString from './isitString';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitCapitalized = (object) => {
  if (!isitString(object)) {
    return false;
  }

  const words = object.split(' ');
  const capitalizedWords = words.map((word) => {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  });

  return isitEqual(words, capitalizedWords);
};

export const isitAllCapitalized = createIsAllMethod(isitCapitalized);
export const isitAnyCapitalized = createIsAnyMethod(isitCapitalized);
export const isitNotCapitalized = createIsNotMethod(isitCapitalized);

export default isitCapitalized;
