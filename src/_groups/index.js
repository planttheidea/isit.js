// arithmetic
import arithmetic, {
  all as allArithmetic,
  any as anyArithmetic,
  not as notArithmetic
} from './arithmetic';

// array
import array, {
  all as allArray,
  any as anyArray,
  not as notArray
} from './array';

// compose
import compose, {
  matchEvery,
  matchSome
} from '../compose';

// environment
import environment, {
  all as allEnvironment,
  any as anyEnvironment,
  not as notEnvironment
} from './environment';

// object
import object, {
  all as allObject,
  any as anyObject,
  not as notObject
} from './object';

// presence
import presence, {
  all as allPresence,
  any as anyPresence,
  not as notPresence
} from './presence';

// regexp
import regexp, {
  all as allRegExp,
  any as anyRegExp,
  not as notRegExp
} from './regexp';

// string
import string, {
  all as allString,
  any as anyString,
  not as notString
} from './string';

// time
import time, {
  all as allTime,
  any as anyTime,
  not as notTime
} from './time';

// types
import types, {
  all as allTypes,
  any as anyTypes,
  not as notTypes
} from './types';

export const isAll = {
  ...allArithmetic,
  ...allArray,
  ...allEnvironment,
  ...allObject,
  ...allPresence,
  ...allRegExp,
  ...allString,
  ...allTime,
  ...allTypes
};

export const isAny = {
  ...anyArithmetic,
  ...anyArray,
  ...anyEnvironment,
  ...anyObject,
  ...anyPresence,
  ...anyRegExp,
  ...anyString,
  ...anyTime,
  ...anyTypes
};

export const isNot = {
  ...notArithmetic,
  ...notArray,
  ...notEnvironment,
  ...notObject,
  ...notPresence,
  ...notRegExp,
  ...notString,
  ...notTime,
  ...notTypes
};

export {matchEvery};
export {matchSome};

export default {
  ...arithmetic,
  ...array,
  ...environment,
  ...object,
  ...presence,
  ...regexp,
  ...string,
  ...time,
  ...types,
  all: isAll,
  any: isAny,
  compose,
  not: isNot
};
