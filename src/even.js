// types
import isNumber from './number';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

/**
 * @module even
 */

/**
* @function isEven
*
* @param {*} object object to test
* @returns {boolean} is the object even
*/
const isEven = (object) => {
  return isNumber(object) && object % 2 === 0;
};

/**
 * @function isAllEven
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are all of the objects even
 */
export const isAllEven = createIsAllMethod(isEven);

/**
 * @function isAnyEven
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are any of the objects even
 */
export const isAnyEven = createIsAnyMethod(isEven);

/**
* @function isNotEven
*
* @param {*} object object to test
* @returns {boolean} is the object not even
*/
export const isNotEven = createIsNotMethod(isEven);

export default isEven;
