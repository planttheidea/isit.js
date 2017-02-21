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
 * @function isitArguments
 *
 * @param {*} object object to test
 * @returns {boolean} is the object an arguments object
 */
const isitArguments = (object) => {
  return toString(object) === getObjectClass('Arguments') || !!(object && typeof object === 'object' && 'callee' in object);
};

/**
 * @function isitAllArguments
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are all of the objects an arguments object
 */
export const isitAllArguments = createIsAllMethod(isitArguments);

/**
 * @function isitAnyArguments
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are any of the objects an arguments object
 */
export const isitAnyArguments = createIsAnyMethod(isitArguments);

/**
 * @function isitNotArguments
 *
 * @param {*} object object to test
 * @returns {boolean} is the object not an arguments object
 */
export const isitNotArguments = createIsNotMethod(isitArguments);

export default isitArguments;
