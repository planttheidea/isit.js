// constants
import {
  SPLIT_WORDS_REGEXP
} from './stringConstants';

/**
 * @private
 *
 * @function getArrayOfWords
 *
 * @description
 * get the string split and returned as a clean array of its words
 *
 * @param {string} string string to split
 * @returns {Array<string>} array of words
 */
export const getArrayOfWords = (string) => {
  return string.split(SPLIT_WORDS_REGEXP).reduce((words, word) => {
    if (word.trim() === '') {
      return words;
    }

    const spacedWord = word.charAt(0) + word.slice(1).replace(/([A-Z])/g, ' $1');

    return words.concat(spacedWord.split(SPLIT_WORDS_REGEXP));
  }, []);
};

/**
 * @private
 *
 * @function createConvertStringMethod
 *
 * @description
 * create method that converts the string into an array of words
 *
 * @param {function} fn fn to call in when building the string conversion method
 * @returns {function(string): string} converted string
 */
export const createConvertStringMethod = (fn) => {
  return (string) => {
    const words = getArrayOfWords(string);

    return words.reduce(fn, '');
  };
};

/**
 * @private
 *
 * @function toCamelCase
 *
 * @description
 * Converts string passed to camelCase spelling
 *
 * @param {string} string string to convert
 * @returns {string} converted string
 */
export const toCamelCase = createConvertStringMethod((camelCaseString, word) => {
  return !camelCaseString ? word.toLowerCase() : `${camelCaseString}${word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()}`;
});

/**
 * @private
 *
 * @function toKebabCase
 *
 * @description
 * Converts string passed to kebab-case spelling
 *
 * @param {string} string string to convert
 * @returns {string} converted string
 */
export const toKebabCase = createConvertStringMethod((kebabCaseString, word) => {
  const lowerCaseWord = word.toLowerCase();

  return !kebabCaseString ? lowerCaseWord : `${kebabCaseString}-${lowerCaseWord}`;
});

/**
 * @private
 *
 * @function toSnakeCase
 *
 * @description
 * Converts string passed to snake_case spelling
 *
 * @param {string} string string to convert
 * @returns {string} converted string
 */
export const toSnakeCase = createConvertStringMethod((snakeCaseString, word) => {
  const lowerCaseWord = word.toLowerCase();

  return !snakeCaseString ? lowerCaseWord : `${snakeCaseString}_${lowerCaseWord}`;
});

/**
 * @private
 *
 * @function toStartCase
 *
 * @description
 * Converts string passed to Start Case spelling
 *
 * @param {string} string string to convert
 * @returns {string} converted string
 */
export const toStartCase = createConvertStringMethod((startCaseString, word) => {
  const startCaseWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

  return !startCaseString ? startCaseWord : `${startCaseString} ${startCaseWord}`;
});
