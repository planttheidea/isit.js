// constants
import {
  NEGATIVE_INFINITY,
  POSITIVE_INFINITY
} from './_internal/arithmeticConstants';

// types
import isNumber from './number';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

/**
 * @module finite
 */

/**
* @function isFinite
*
* @param {*} object object to test
* @returns {boolean} is the object finite
*/
const isFinite = (object) => {
  return isNumber(object) && object !== NEGATIVE_INFINITY && object !== POSITIVE_INFINITY;
};

/**
 * @function isAllFinite
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are all of the objects finite
 */
export const isAllFinite = createIsAllMethod(isFinite);

/**
 * @function isAnyFinite
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are any of the objects finite
 */
export const isAnyFinite = createIsAnyMethod(isFinite);

/**
* @function isNotFinite
*
* @param {*} object object to test
* @returns {boolean} is the object not finite
*/
export const isNotFinite = createIsNotMethod(isFinite);

export default isFinite;
