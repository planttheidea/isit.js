// types
import isitString from './isitString';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitPalindrome = (object) => {
  if (!isitString(object)) {
    return false;
  }

  const spacelessString = object.replace(/\s/g, '');

  return spacelessString === spacelessString.split('').reverse().join('');
};

export const isitAllPalindrome = createIsAllMethod(isitPalindrome);
export const isitAnyPalindrome = createIsAnyMethod(isitPalindrome);
export const isitNotPalindrome = createIsNotMethod(isitPalindrome);

export default isitPalindrome;
