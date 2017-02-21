// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';
import {
  getObjectClass,
  toString
} from './_internal/typeUtils';

/**
 * @function isitArray
 *
 * @param {*} object object to test
 * @returns {boolean} is the object an array
 */
const isitArray = Array.isArray || function(object) {
  return toString(object) === getObjectClass('Array');
};

/**
 * @function isitAllArray
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are all of the objects an array
 */
export const isitAllArray = createIsAllMethod(isitArray);

/**
 * @function isitAnyArray
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are all of the objects an array
 */
export const isitAnyArray = createIsAnyMethod(isitArray);

/**
 * @function isitNotArray
 *
 * @param {*} object object to test
 * @returns {boolean} is the object an array
 */
export const isitNotArray = createIsNotMethod(isitArray);

export default isitArray;
