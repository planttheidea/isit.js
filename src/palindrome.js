// types
import isString from './string';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isPalindrome = (object) => {
  if (!isString(object)) {
    return false;
  }

  const spacelessString = object.replace(/\s/g, '');

  return spacelessString === spacelessString.split('').reverse().join('');
};

export const isAllPalindrome = createIsAllMethod(isPalindrome);
export const isAnyPalindrome = createIsAnyMethod(isPalindrome);
export const isNotPalindrome = createIsNotMethod(isPalindrome);

export default isPalindrome;
