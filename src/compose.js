/**
 * @module compose
 */

/**
 * @private
 *
 * @function createMatchFunction
 *
 * @description
 * create a function that will accept an array of functions and execute either every or some on them
 * to test the objects passed
 *
 * @param {string} methodName of the Array.prototype method to call on the array of functions
 * @returns {function(...Array<function>): (function(...Array<*>): boolean)} function that executes
 * methodName on the array of functions and returns the boolean of whether it matches the criteria
 */
export const createMatchFunction = (methodName) => {
  return (...functions) => {
    return (...objects) => {
      return functions[methodName]((fn) => {
        return !!fn(...objects);
      });
    };
  };
};

/**
 * @function matchAll
 *
 * @description
 * compose a method that tests an object(s) against all the functions passed
 *
 * @param {...Array<function>} list of functions to test object(s) against
 * @returns {function(...Array<*>): boolean} do the object(s) passed match all of the functions
 */
export const matchAll = createMatchFunction('every');

/**
 * @function matchAll
 *
 * @description
 * compose a method that tests an object(s) against at least one of the functions passed
 *
 * @param {...Array<function>} list of functions to test object(s) against
 * @returns {function(...Array<*>): boolean} do the object(s) passed match any of the functions
 */
export const matchAny = createMatchFunction('some');

export default {
  all: matchAll,
  any: matchAny
};
