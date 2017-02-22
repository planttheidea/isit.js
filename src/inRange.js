// types
import isNumber from './number';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

/**
 * @module inRange
 */

/**
 * @function isInRange
 *
 * @description
 * is the object passed between the minimumValue and maximumValue
 *
 * @param {number} object the value to compare
 * @param {number} minimumValue the value that object needs to be at least as large as
 * @param {number} maximumValue the value that object needs to be at most as large as
 * @returns {boolean} is object between minimumValue and maximumValue
 */
const isInRange = (object, minimumValue, maximumValue) => {
  return isNumber(object) && isNumber(minimumValue) && isNumber(maximumValue) &&
    object >= minimumValue && object <= maximumValue;
};

/**
 * @function isNotInRange
 *
 * @description
 * is the object passed not between the minimumValue and maximumValue
 *
 * @param {number} object the value to compare
 * @param {number} minimumValue the value that object needs to be at least as large as
 * @param {number} maximumValue the value that object needs to be at most as large as
 * @returns {boolean} is object not between minimumValue and maximumValue
 */
export const isNotInRange = createIsNotMethod(isInRange);

export default isInRange;
