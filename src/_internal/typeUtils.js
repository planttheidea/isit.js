/**
 * @private
 *
 * @function toString
 *
 * @description
 * Get the full object class value string based on type
 *
 * @param {string} type class
 * @returns {string} toString value based on type
 */
export const getObjectClass = (type) => {
  return `[object ${type}]`;
};

/**
 * @private
 *
 * @function toString
 *
 * @description
 * Get the toString of the object
 *
 * @param {*} object object to get class of
 * @returns {string} object class
 */
export const toString = (object) => {
    return Object.prototype.toString.call(object);
};
