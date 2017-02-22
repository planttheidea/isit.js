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
 * @function isArguments
 *
 * @param {*} object object to test
 * @returns {boolean} is the object an arguments object
 */
const isArguments = (object) => {
  return toString(object) === getObjectClass('Arguments') || !!(object && typeof object === 'object' && 'callee' in object);
};

/**
 * @function isAllArguments
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are all of the objects an arguments object
 */
export const isAllArguments = createIsAllMethod(isArguments);

/**
 * @function isAnyArguments
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are any of the objects an arguments object
 */
export const isAnyArguments = createIsAnyMethod(isArguments);

/**
 * @function isNotArguments
 *
 * @param {*} object object to test
 * @returns {boolean} is the object not an arguments object
 */
export const isNotArguments = createIsNotMethod(isArguments);

export default isArguments;
