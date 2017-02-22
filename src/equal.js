// compose
import {
  matchAny
} from './compose';

// constants
import {
  EPSILON
} from './_internal/arithmeticConstants';

// types
import {
  isAllArray
} from './array';
import {
  isAllDecimal
} from './decimal';
import {
  isAllMap
} from './map';
import {
  isAllNumber
} from './number';
import {
  isAllObject
} from './object';
import {
  isAllRegExp
} from './regexp';
import isSameType from './sameType';
import {
  isAllSet
} from './set';
import {
  isAllString
} from './string';
import {
  isAllSymbol
} from './symbol';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

/**
 * @module equal
 */

const getOwnPropertyNames = Object.getOwnPropertyNames;

const isAllRegExpOrSymbol = matchAny(isAllRegExp, isAllSymbol);
const isAllMapOrSet = matchAny(isAllMap, isAllSet);

/**
 * @function isEqual
 *
 * @description
 * are the two objects passed equal in value
 *
 * @param {*} object1 the first object to compare
 * @param {*} object2 the second object to compare
 * @returns {boolean} are the objects equal in value
 */
const isEqual = (object1, object2) => {
  if (object1 === object2) {
    return true;
  }

  if (!isSameType(object1, object2)) {
    return false;
  }

  if (isAllString(object1, object2)) {
    return `${object1}` === `${object2}`;
  }

  if (isAllDecimal(object1, object2)) {
    return Math.abs(object1 - object2) < EPSILON;
  }

  if (isAllNumber(object1, object2)) {
    return object1 === object2 && (1 / object1) === (1 / object2);
  }

  if (isAllRegExpOrSymbol(object1, object2)) {
    return object1.toString() === object2.toString();
  }

  if (isAllArray(object1, object2)) {
    const length = object1.length;

    if (length !== object2.length) {
      return false;
    }

    let index = -1;

    while (++index < length) {
      if (!isEqual(object1[index], object2[index])) {
        return false;
      }
    }

    return true;
  }

  if (isAllMapOrSet(object1, object2)) {
    if (object1.size !== object2.size) {
      return false;
    }

    let keys = object1.keys(),
        keysIterator = keys.next(),
        key;

    while (!keysIterator.done) {
      key = keysIterator.value;

      if (!object2.has(key) || (object1.get && !isEqual(object1.get(key), object2.get(key)))) {
        return false;
      }

      keysIterator = keys.next();
    }

    return true;
  }

  if (isAllObject(object1, object2)) {
    const object1Properties = getOwnPropertyNames(object1);
    const object2Properties = getOwnPropertyNames(object2);

    if (!isEqual(object1Properties, object2Properties)) {
      return false;
    }

    const length = object1Properties.length;

    let index = -1;

    while (++index < length) {
      if (!isEqual(object1Properties[index], object2Properties[index])) {
        return false;
      }
    }

    return true;
  }

  return false;
};

/**
 * @function isNotEqual
 *
 * @description
 * are the two objects passed not equal in value
 *
 * @param {*} object1 the first object to compare
 * @param {*} object2 the second object to compare
 * @returns {boolean} are the objects not equal in value
 */
export const isNotEqual = createIsNotMethod(isEqual);

export default isEqual;
