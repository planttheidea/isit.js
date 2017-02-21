/**
 * @private
 *
 * @function createIsAllMethod
 *
 * @description
 * create a method that determines if all objects match against the method passed
 *
 * @param {function} method method to test each object against
 * @returns {function(...Array<*>): boolean} function accepting objects to test against method
 */
export const createIsAllMethod = (method) => {
  return (...objects) => {
    if (!objects.length) {
      return false;
    }

    return objects.every(method);
  };
};

/**
 * @private
 *
 * @function createIsAnyMethod
 *
 * @description
 * create a method that determines if some objects match against the method passed
 *
 * @param {function} method method to test each object against
 * @returns {function(...Array<*>): boolean} function accepting objects to test against method
 */
export const createIsAnyMethod = (method) => {
  return (...objects) => {
    if (!objects.length) {
      return false;
    }

    return objects.some(method);
  };
};

/**
 * @private
 *
 * @function createIsNotMethod
 *
 * @description
 * create a method that returns the boolean opposite return of the method called with parameters
 *
 * @param {function} method method to test each object against
 * @returns {function(...Array<*>): boolean} function accepting objects to test against method
 */
export const createIsNotMethod = (method) => {
  return (...parameters) => {
    return !method(...parameters);
  };
};

/**
 * @private
 *
 * @function createRegExpTest
 *
 * @description
 * create a method that tests the regexp passed against an object
 *
 * @param {RegExp} regexp regular expression to use in test
 * @returns {function(*): boolean} function accepting object to test against regexp
 */
export const createRegExpTest = (regexp) => {
  return (object) => {
    return regexp.test(object);
  };
};
