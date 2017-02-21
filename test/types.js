// test
import test from 'ava';
import {
  isAllAnyNot,
  isNotOnly
} from './_utils/functionPermutations';

// src
import src, {
  all,
  any,
  not
} from 'src/types';

const args = (() => {
  function foo() {
    return arguments;
  }

  return foo('foo', 123, /bar/);
})();
const array = ['foo'];
const boolean = true;
const char = 'x';
const date = new Date();
const decimal = 1.23;
const error = new Error('foo');
const evalError = new EvalError();
const rangeError = new RangeError();
const referenceError = new ReferenceError();
const syntaxError = new SyntaxError();
const typeError = new TypeError();
const uriError = new URIError();
const float32Array = new Float32Array();
const float64Array = new Float64Array();
const func = function foo() {};
const generator = function* foo() {};
const int8Array = new Int8Array();
const int16Array = new Int16Array();
const int32Array = new Int32Array();
const integer = 123;
const json = JSON.stringify({foo: 'bar'});
const map = new Map().set('foo', 'bar');
const nan = NaN;
const nul = null;
const number = 123;
const object = {foo: 'bar'};
const plainObject = {foo: 'bar'};
const pureObject = Object.create(null);
const regexp = /foo/;
const set = new Set().add('foo');
const string = 'foo';
const symbol = Symbol('foo');
const uint8Array = new Uint8Array();
const uint8ClampedArray = new Uint8ClampedArray();
const uint16Array = new Uint16Array();
const uint32Array = new Uint32Array();
const undef = undefined;

const RENAMED_TYPE_KEYS = {
  args: 'arguments',
  func: 'function',
  nul: 'null',
  undef: 'undefined'
};

const STANDALONE_TYPE_VALUES = {
  args,
  array,
  boolean,
  date,
  map,
  nan,
  nul,
  regexp,
  set,
  symbol,
  undef
};

const ERROR_TYPE_VALUES = {
  error,
  evalError,
  rangeError,
  referenceError,
  syntaxError,
  typeError,
  uriError
};

const FUNCTION_TYPE_VALUES = {
  func,
  generator
};

const JSON_TYPE_VALUES = {
  json
};

const NUMBER_TYPE_VALUES = {
  decimal,
  integer,
  number
};

const OBJECT_TYPE_VALUES = {
  object,
  plainObject,
  pureObject
};

const STRING_TYPE_VALUES = {
  char,
  string
};

const TYPED_ARRAY_TYPE_VALUES = {
  float32Array,
  float64Array,
  int8Array,
  int16Array,
  int32Array,
  uint8Array,
  uint8ClampedArray,
  uint16Array,
  uint32Array
};

const ALL_TYPE_VALUES = {
  ...STANDALONE_TYPE_VALUES,
  ...ERROR_TYPE_VALUES,
  ...FUNCTION_TYPE_VALUES,
  ...JSON_TYPE_VALUES,
  ...NUMBER_TYPE_VALUES,
  ...OBJECT_TYPE_VALUES,
  ...STRING_TYPE_VALUES,
  ...TYPED_ARRAY_TYPE_VALUES
};

const ALL_TYPE_VALUES_NOT_EXPLICIT_KEYS = [
  'evalError', 'rangeError', 'referenceError', 'syntaxError', 'typeError', 'uriError',
  'pureObject',
  'float32Array', 'float64Array', 'int8Array', 'int16Array', 'int32Array', 'uint8Array', 'uint8ClampedArray', 'uint16Array', 'uint32Array'
];

const NOT_ERROR_TYPE_VALUES = {
  ...STANDALONE_TYPE_VALUES,
  ...FUNCTION_TYPE_VALUES,
  ...JSON_TYPE_VALUES,
  ...NUMBER_TYPE_VALUES,
  ...OBJECT_TYPE_VALUES,
  ...STRING_TYPE_VALUES,
  ...TYPED_ARRAY_TYPE_VALUES
};

const NOT_FUNCTION_TYPE_VALUES = {
  ...STANDALONE_TYPE_VALUES,
  ...ERROR_TYPE_VALUES,
  ...JSON_TYPE_VALUES,
  ...NUMBER_TYPE_VALUES,
  ...OBJECT_TYPE_VALUES,
  ...STRING_TYPE_VALUES,
  ...TYPED_ARRAY_TYPE_VALUES
};

const NOT_JSON_TYPE_VALUES = {
  ...STANDALONE_TYPE_VALUES,
  ...ERROR_TYPE_VALUES,
  ...FUNCTION_TYPE_VALUES,
  ...NUMBER_TYPE_VALUES,
  ...OBJECT_TYPE_VALUES,
  ...STRING_TYPE_VALUES,
  ...TYPED_ARRAY_TYPE_VALUES
};

const VALID_ALTERNATIVE_JSON_TYPE_VALUES = ['boolean', 'decimal', 'integer', 'nul', 'number'];

const NOT_NUMBER_TYPE_VALUES = {
  ...STANDALONE_TYPE_VALUES,
  ...ERROR_TYPE_VALUES,
  ...FUNCTION_TYPE_VALUES,
  ...JSON_TYPE_VALUES,
  ...OBJECT_TYPE_VALUES,
  ...STRING_TYPE_VALUES,
  ...TYPED_ARRAY_TYPE_VALUES
};

const NOT_OBJECT_TYPE_VALUES = {
  ...STANDALONE_TYPE_VALUES,
  ...FUNCTION_TYPE_VALUES,
  ...JSON_TYPE_VALUES,
  ...NUMBER_TYPE_VALUES,
  ...STRING_TYPE_VALUES
};

const VALID_ALTERNATIVE_OBJECT_TYPE_VALUES = ['args', 'array', 'date', 'map', 'nul', 'regexp', 'set'];

const NOT_STRING_TYPE_VALUES = {
  ...STANDALONE_TYPE_VALUES,
  ...ERROR_TYPE_VALUES,
  ...FUNCTION_TYPE_VALUES,
  ...JSON_TYPE_VALUES,
  ...NUMBER_TYPE_VALUES,
  ...OBJECT_TYPE_VALUES,
  ...TYPED_ARRAY_TYPE_VALUES
};

const VALID_ALTERNATIVE_STRING_TYPE_VALUES = ['json'];

const NOT_TYPED_ARRAY_TYPE_VALUES = {
  ...STANDALONE_TYPE_VALUES,
  ...ERROR_TYPE_VALUES,
  ...FUNCTION_TYPE_VALUES,
  ...JSON_TYPE_VALUES,
  ...NUMBER_TYPE_VALUES,
  ...OBJECT_TYPE_VALUES,
  ...STRING_TYPE_VALUES
};

const SAME_TYPE_EXCEPTION_KEYS = {
  char: ['json', 'string'],
  decimal: ['integer', 'nan', 'number'],
  error: ['evalError', 'rangeError', 'referenceError', 'syntaxError', 'typeError', 'uriError'],
  integer: ['decimal', 'nan', 'number'],
  nan: ['decimal', 'integer', 'number'],
  number: ['decimal', 'integer', 'nan'],
  json: ['char', 'string'],
  object: ['plainObject', 'pureObject'],
  plainObject: ['object', 'pureObject'],
  string: ['char', 'json']
};

Object.keys(STANDALONE_TYPE_VALUES).forEach((key) => {
  const realKey = RENAMED_TYPE_KEYS[key] || key;

  test(`if ${realKey} will match ${realKey} but not others`, (t) => {
    Object.keys(STANDALONE_TYPE_VALUES).forEach((keyToTest) => {
      const comparator = keyToTest === key ? 'true' : 'false';

      t[comparator](src[realKey](STANDALONE_TYPE_VALUES[keyToTest]));
    });
  });
});

Object.keys(ERROR_TYPE_VALUES).forEach((key) => {
  test(`if ${key} is an error type`, (t) => {
    t.true(src.error(ERROR_TYPE_VALUES[key]));
  });
});

Object.keys(NOT_ERROR_TYPE_VALUES).forEach((key) => {
  const realKey = RENAMED_TYPE_KEYS[key] || key;

  test(`if ${realKey} is not an error type`, (t) => {
    t.false(src.error(NOT_ERROR_TYPE_VALUES[key]));
  });
});

Object.keys(FUNCTION_TYPE_VALUES).forEach((key) => {
  const realKey = RENAMED_TYPE_KEYS[key] || key;

  test(`if ${realKey} is a function type`, (t) => {
    t.true(src.function(FUNCTION_TYPE_VALUES[key]));
  });
});

Object.keys(NOT_FUNCTION_TYPE_VALUES).forEach((key) => {
  const realKey = RENAMED_TYPE_KEYS[key] || key;

  test(`if ${realKey} is not a function type`, (t) => {
    t.false(src.function(NOT_FUNCTION_TYPE_VALUES[key]));
  });
});

test('if generator will return true for generator functions and nothing else', (t) => {
  t.false(src.generator(FUNCTION_TYPE_VALUES.func));
  t.true(src.generator(FUNCTION_TYPE_VALUES.generator));

  Object.keys(NOT_FUNCTION_TYPE_VALUES).forEach((key) => {
    t.false(src.generator(NOT_FUNCTION_TYPE_VALUES[key]));
  });
});

Object.keys(JSON_TYPE_VALUES).forEach((key) => {
  const realKey = RENAMED_TYPE_KEYS[key] || key;

  test(`if ${realKey} is a valid json type`, (t) => {
    t.true(src.json(JSON_TYPE_VALUES[key]));
  });
});

Object.keys(NOT_JSON_TYPE_VALUES).forEach((key) => {
  const realKey = RENAMED_TYPE_KEYS[key] || key;

  test(`if ${realKey} is not a valid json type`, (t) => {
    const comparator = ~VALID_ALTERNATIVE_JSON_TYPE_VALUES.indexOf(key) ? 'true' : 'false';

    t[comparator](src.json(NOT_JSON_TYPE_VALUES[key]));
  });
});

Object.keys(NUMBER_TYPE_VALUES).forEach((key) => {
  test(`if ${key} is a number type`, (t) => {
    t.true(src.number(NUMBER_TYPE_VALUES[key]));
  });
});

Object.keys(NOT_NUMBER_TYPE_VALUES).forEach((key) => {
  const realKey = RENAMED_TYPE_KEYS[key] || key;

  test(`if ${realKey} is not a number type`, (t) => {
    t.false(src.number(NOT_NUMBER_TYPE_VALUES[key]));
  });
});

test('if decimal will return true for decimals and nothing else', (t) => {
  t.false(src.decimal(NUMBER_TYPE_VALUES.integer));
  t.true(src.decimal(NUMBER_TYPE_VALUES.decimal));

  Object.keys(NOT_NUMBER_TYPE_VALUES).forEach((key) => {
    t.false(src.decimal(NOT_NUMBER_TYPE_VALUES[key]));
  });
});

test('if integer will return true for integers and nothing else', (t) => {
  t.true(src.integer(NUMBER_TYPE_VALUES.integer));
  t.false(src.integer(NUMBER_TYPE_VALUES.decimal));

  Object.keys(NOT_NUMBER_TYPE_VALUES).forEach((key) => {
    t.false(src.integer(NOT_NUMBER_TYPE_VALUES[key]));
  });
});

Object.keys(OBJECT_TYPE_VALUES).forEach((key) => {
  test(`if ${key} is an object type`, (t) => {
    t.true(src.object(OBJECT_TYPE_VALUES[key]));
  });
});

Object.keys(NOT_OBJECT_TYPE_VALUES).forEach((key) => {
  const realKey = RENAMED_TYPE_KEYS[key] || key;

  test(`if ${realKey} is not an object type`, (t) => {
    const comparator = ~VALID_ALTERNATIVE_OBJECT_TYPE_VALUES.indexOf(key) ? 'true' : 'false';

    t[comparator](src.object(NOT_OBJECT_TYPE_VALUES[key]));
  });
});

test('if plainObject will return true for plain objects and nothing else', (t) => {
  t.true(src.plainObject(OBJECT_TYPE_VALUES.plainObject));
  t.false(src.plainObject(OBJECT_TYPE_VALUES.pureObject));

  Object.keys(NOT_OBJECT_TYPE_VALUES).forEach((key) => {
    t.false(src.plainObject(NOT_OBJECT_TYPE_VALUES[key]));
  });
});

Object.keys(STRING_TYPE_VALUES).forEach((key) => {
  test(`if ${key} is a string type`, (t) => {
    t.true(src.string(STRING_TYPE_VALUES[key]));
  });
});

Object.keys(NOT_STRING_TYPE_VALUES).forEach((key) => {
  const realKey = RENAMED_TYPE_KEYS[key] || key;

  test(`if ${realKey} is not a string type`, (t) => {
    const comparator = ~VALID_ALTERNATIVE_STRING_TYPE_VALUES.indexOf(key) ? 'true' : 'false';

    t[comparator](src.string(NOT_STRING_TYPE_VALUES[key]));
  });
});

test('if char will return true for chars and nothing else', (t) => {
  t.true(src.char(STRING_TYPE_VALUES.char));
  t.false(src.char(STRING_TYPE_VALUES.string));

  Object.keys(NOT_STRING_TYPE_VALUES).forEach((key) => {
    t.false(src.char(NOT_STRING_TYPE_VALUES[key]));
  });
});

Object.keys(TYPED_ARRAY_TYPE_VALUES).forEach((key) => {
  test(`if ${key} is a typed array`, (t) => {
    t.true(src.typedArray(TYPED_ARRAY_TYPE_VALUES[key]));
  });
});

Object.keys(NOT_TYPED_ARRAY_TYPE_VALUES).forEach((key) => {
  const realKey = RENAMED_TYPE_KEYS[key] || key;

  test(`if ${realKey} is not a typed array`, (t) => {
    t.false(src.typedArray(NOT_TYPED_ARRAY_TYPE_VALUES[key]));
  });
});

Object.keys(ALL_TYPE_VALUES).forEach((key) => {
  const realKey = RENAMED_TYPE_KEYS[key] || key;

  if (!~ALL_TYPE_VALUES_NOT_EXPLICIT_KEYS.indexOf(realKey)) {
    isAllAnyNot(all, any, not, realKey);
  }
});

test('if sameType will correctly identify when items are of the same type', (t) => {
  Object.keys(ALL_TYPE_VALUES).forEach((key) => {
    const realKey = RENAMED_TYPE_KEYS[key] || key;

    if (!~ALL_TYPE_VALUES_NOT_EXPLICIT_KEYS.indexOf(realKey)) {
      Object.keys(ALL_TYPE_VALUES).forEach((otherKey) => {
        const comparator = key === otherKey || (SAME_TYPE_EXCEPTION_KEYS[key] && ~SAME_TYPE_EXCEPTION_KEYS[key].indexOf(otherKey)) ? 'true' : 'false';

        t[comparator](src.sameType(ALL_TYPE_VALUES[key], ALL_TYPE_VALUES[otherKey]), `${key} vs ${otherKey}`);
      });
    }
  });
});

isNotOnly(all, any, not, 'sameType');
