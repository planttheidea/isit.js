// constants
import {
  EPSILON
} from './_internal/arithmeticConstants';

// types
import {
  isitAllArray
} from './isitArray';
import {
  isitAllDecimal
} from './isitDecimal';
import {
  isitAllMap
} from './isitMap';
import {
  isitAllNull
} from './isitNull';
import {
  isitAllNumber
} from './isitNumber';
import {
  isitAllObject
} from './isitObject';
import {
  isitAllRegExp
} from './isitRegExp';
import isitSameType from './isitSameType';
import {
  isitAllSet
} from './isitSet';
import {
  isitAllString
} from './isitString';
import {
  isitAllSymbol
} from './isitSymbol';
import {
  isitAllUndefined
} from './isitUndefined';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const getOwnPropertyNames = Object.getOwnPropertyNames;

const isitEqual = (object1, object2) => {
  if (!isitSameType(object1, object2)) {
    return false;
  }

  if (object1 === object2 || isitAllUndefined(object1, object2) || isitAllNull(object1, object2)) {
    return true;
  }

  if (isitAllString(object1, object2)) {
    return `${object1}` === `${object2}`;
  }

  if (isitAllDecimal(object1, object2)) {
    return Math.abs(object1 - object2) < EPSILON;
  }

  if (isitAllNumber(object1, object2)) {
    return object1 === object2 && (1 / object1) === (1 / object2);
  }

  if (isitAllRegExp(object1, object2) || isitAllSymbol(object1, object2)) {
    return object1.toString() === object2.toString();
  }

  if (isitAllArray(object1, object2)) {
    const length = object1.length;

    if (length !== object2.length) {
      return false;
    }

    let index = -1;

    while (++index < length) {
      if (!isitEqual(object1[index], object2[index])) {
        return false;
      }
    }

    return true;
  }

  if (isitAllMap(object1, object2) || isitAllSet(object1, object2)) {
    if (object1.size !== object2.size) {
      return false;
    }

    let keys = object1.keys(),
        keysIterator = keys.next(),
        key;

    while (!keysIterator.done) {
      key = keysIterator.value;

      if (!object2.has(key) || (object1.get && object1.get(key) !== object2.get(key))) {
        return false;
      }

      keysIterator = keys.next();
    }

    return true;
  }

  if (isitAllObject(object1, object2)) {
    const object1Properties = getOwnPropertyNames(object1);
    const object2Properties = getOwnPropertyNames(object2);

    if (!isitEqual(object1Properties, object2Properties)) {
      return false;
    }

    const length = object1Properties.length;

    let index = -1;

    while (++index < length) {
      if (!isitEqual(object1Properties[index], object2Properties[index])) {
        return false;
      }
    }

    return true;
  }

  return false;
};

export const isitNotEqual = createIsNotMethod(isitEqual);

export default isitEqual;
