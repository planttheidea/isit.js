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
 * @function isArray
 *
 * @param {*} object object to test
 * @returns {boolean} is the object an array
 */
const isArray = Array.isArray || function(object) {
  return toString(object) === getObjectClass('Array');
};

/**
 * @function isAllArray
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are all of the objects an array
 */
export const isAllArray = createIsAllMethod(isArray);

/**
 * @function isAnyArray
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are all of the objects an array
 */
export const isAnyArray = createIsAnyMethod(isArray);

/**
 * @function isNotArray
 *
 * @param {*} object object to test
 * @returns {boolean} is the object an array
 */
export const isNotArray = createIsNotMethod(isArray);

export default isArray;
