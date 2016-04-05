'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.multiParamFunctions = exports.isitUpperCase = exports.isitStartsWith = exports.isitStartWith = exports.isitStartCase = exports.isitSnakeCase = exports.isitPalindrome = exports.isitLowerCase = exports.isitKebabCase = exports.isitIncludes = exports.isitInclude = exports.isitEndsWith = exports.isitEndWith = exports.isitCapitalized = exports.isitCamelCase = undefined;

var _arithmetic = require('./arithmetic');

var _type = require('./type');

/**
 * All necessary values for computation of getArrayOfWords is taken from lodash,
 * found at https://raw.githubusercontent.com/lodash/lodash/master/lodash.js
 */
var RS_ASTRAL_RANGE = '\\ud800-\\udfff';
var RS_COMBO_MARKS_RANGE = '\\u0300-\\u036f\\ufe20-\\ufe23';
var RS_COMBO_SYMBOLS_RANGE = '\\u20d0-\\u20f0';
var RS_DINGBAT_RANGE = '\\u2700-\\u27bf';
var RS_LOWER_RANGE = 'a-z\\xdf-\\xf6\\xf8-\\xff';
var RS_MATH_OP_RANGE = '\\xac\\xb1\\xd7\\xf7';
var RS_NON_CHAR_RANGE = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf';
var RS_QUOTE_RANGE = '\\u2018\\u2019\\u201c\\u201d';
var RS_SPACE_RANGE = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000';
var RS_UPPER_RANGE = 'A-Z\\xc0-\\xd6\\xd8-\\xde';
var RS_VAR_RANGE = '\\ufe0e\\ufe0f';
var RS_BREAK_RANGE = RS_MATH_OP_RANGE + RS_NON_CHAR_RANGE + RS_QUOTE_RANGE + RS_SPACE_RANGE;

var RS_BREAK = '[' + RS_BREAK_RANGE + ']';
var RS_COMBO = '[' + (RS_COMBO_MARKS_RANGE + RS_COMBO_SYMBOLS_RANGE) + ']';
var RS_DIGITS = '\\d+';
var RS_DINGBAT = '[' + RS_DINGBAT_RANGE + ']';
var RS_LOWER = '[' + RS_LOWER_RANGE + ']';
var RS_MISC = '[^' + (RS_ASTRAL_RANGE + RS_BREAK_RANGE + RS_DIGITS + RS_DINGBAT_RANGE + RS_LOWER_RANGE + RS_UPPER_RANGE) + ']';
var RS_FITZ = '\\ud83c[\\udffb-\\udfff]';
var RS_MODIFIER = '(?:' + RS_COMBO + '|' + RS_FITZ + ')';
var RS_NON_ASTRAL = '[^' + RS_ASTRAL_RANGE + ']';
var RS_REGIONAL = '(?:\\ud83c[\\udde6-\\uddff]){2}';
var RS_SURR_PAIR = '[\\ud800-\\udbff][\\udc00-\\udfff]';
var RS_UPPER = '[' + RS_UPPER_RANGE + ']';
var RS_ZWJ = '\\u200d';

var RS_LOWER_MISC = '(?:' + RS_LOWER + '|' + RS_MISC + ')';
var RS_UPPER_MISC = '(?:' + RS_UPPER + '|' + RS_MISC + ')';
var RE_OPT_MOD = RS_MODIFIER + '?';
var RS_OPT_VAR = '[' + RS_VAR_RANGE + ']?';
var RS_OPT_JOIN = '(?:' + RS_ZWJ + '(?:' + [RS_NON_ASTRAL, RS_REGIONAL, RS_SURR_PAIR].join('|') + ')' + (RS_OPT_VAR + RE_OPT_MOD) + ')*';
var RS_SEQ = RS_OPT_VAR + RE_OPT_MOD + RS_OPT_JOIN;
var RS_EMOJI = '(?:' + [RS_DINGBAT, RS_REGIONAL, RS_SURR_PAIR].join('|') + ')' + RS_SEQ;

var HAS_COMPLEX_WORD = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
var COMPLEX_WORD = RegExp([RS_UPPER + '?' + RS_LOWER + '+(?=' + [RS_BREAK, RS_UPPER, '$'].join('|') + ')', RS_UPPER_MISC + '+(?=' + [RS_BREAK, RS_UPPER + RS_LOWER_MISC, '$'].join('|') + ')', RS_UPPER + '?' + RS_LOWER_MISC + '+', RS_UPPER + '+', RS_DIGITS, RS_EMOJI].join('|'), 'g');
var SIMPLE_WORD = /[a-zA-Z0-9]+/g;

var getArrayOfWords = function getArrayOfWords(string) {
    var pattern = HAS_COMPLEX_WORD.test(string) ? COMPLEX_WORD : SIMPLE_WORD;

    return string.match(pattern) || [];
};

/**
 * Converts string passed to camelCase spelling
 *
 * @param {any} string
 * @returns {string}
 */
var toCamelCase = function toCamelCase(string) {
    var arrayOfWords = getArrayOfWords(string);

    var camelCaseString = '';

    arrayOfWords.forEach(function (word, index) {
        camelCaseString += index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return camelCaseString;
};

/**
 * Converts string passed to kebab-case spelling
 *
 * @param {any} string
 * @returns {string}
 */
var toKebabCase = function toKebabCase(string) {
    var arrayOfWords = getArrayOfWords(string);

    var kebabCaseString = '';

    arrayOfWords.forEach(function (word, index) {
        if (index !== 0) {
            kebabCaseString += '-';
        }

        kebabCaseString += word.toLowerCase();
    });

    return kebabCaseString;
};
/**
 * Converts string passed to snake_case spelling
 *
 * @param {any} string
 * @returns {string}
 */
var toSnakeCase = function toSnakeCase(string) {
    var arrayOfWords = getArrayOfWords(string);

    var snakeCaseString = '';

    arrayOfWords.forEach(function (word, index) {
        if (index !== 0) {
            snakeCaseString += '_';
        }

        snakeCaseString += word.toLowerCase();
    });

    return snakeCaseString;
};

/**
 * Converts string passed to Start Case spelling
 *
 * @param {any} string
 * @returns {string}
 */
var toStartCase = function toStartCase(string) {
    var arrayOfWords = getArrayOfWords(string);

    var startCaseString = '';

    arrayOfWords.forEach(function (word, index) {
        if (index !== 0) {
            startCaseString += ' ';
        }

        startCaseString += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return startCaseString;
};

/**
 * Checks to see if the string object is spelled in proper
 * camelCase spelling
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitCamelCase = exports.isitCamelCase = function isitCamelCase(object) {
    return (0, _type.isitString)(object) && object === toCamelCase(object);
};

/**
 * Checks to see if the string object is capitalized, meaning
 * only that the first letter is uppercase
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitCapitalized = exports.isitCapitalized = function isitCapitalized(object) {
    if (!(0, _type.isitString)(object)) {
        return false;
    }

    var words = object.split(' ');
    var capitalized = words.map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return (0, _arithmetic.isitEqual)(words, capitalized);
};

/**
 * Checks if string object ends with the string value endingString
 *
 * @param {any} object
 * @param {string} endingString
 * @returns {boolean}
 */
var isitEndWith = exports.isitEndWith = function isitEndWith(object, endingString) {
    if (!(0, _type.isitString)(object) || !(0, _type.isitString)(endingString)) {
        return false;
    }

    var index = object.indexOf(endingString);

    return index !== -1 && index === object.length - endingString.length;
};

/**
 * Alias function for endWith
 */
var isitEndsWith = exports.isitEndsWith = isitEndWith;

/**
 * Checks if string object has the string value substring contained
 * within it
 *
 * @param {any} object
 * @param {string} substring
 * @returns {boolean}
 */
var isitInclude = exports.isitInclude = function isitInclude(object, substring) {
    return ((0, _type.isitArray)(object) || (0, _type.isitString)(object)) && (0, _type.isitString)(substring) && object.indexOf(substring) !== -1;
};

/**
 * Alias function for include
 */
var isitIncludes = exports.isitIncludes = isitInclude;

/**
 * Checks to see if string object is spelled as proper kebab-case spelling
 *
 * @param {string} object
 * @returns {boolean}
 */
var isitKebabCase = exports.isitKebabCase = function isitKebabCase(object) {
    return (0, _type.isitString)(object) && object.toLowerCase() === toKebabCase(object);
};

/**
 * Checks to see if string object is all lowercase
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitLowerCase = exports.isitLowerCase = function isitLowerCase(object) {
    return (0, _type.isitString)(object) && object === object.toLowerCase();
};

/**
 * Checks to see if string object is spelled identically
 * forwards and backwards, for example: tacocat
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitPalindrome = exports.isitPalindrome = function isitPalindrome(object) {
    if (!(0, _type.isitString)(object)) {
        return false;
    }

    var spacelessString = object.replace(/\s/g, '');

    return spacelessString === spacelessString.split('').reverse().join('');
};

/**
 * Checks to see if string object is spelling in proper
 * snake_case spelling
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitSnakeCase = exports.isitSnakeCase = function isitSnakeCase(object) {
    return (0, _type.isitString)(object) && object.toLowerCase() === toSnakeCase(object);
};

/**
 * Checks to see if string object is spelled in proper
 * Start Case spelling (meaning first letter of each word is
 * capitalized, and the rest of the word is lowercase)
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitStartCase = exports.isitStartCase = function isitStartCase(object) {
    return (0, _type.isitString)(object) && object === toStartCase(object);
};

/**
 * Checks to see if string object starts with string value
 * of substring
 *
 * @param {any} object
 * @param {string} substring
 * @returns {boolean}
 */
var isitStartWith = exports.isitStartWith = function isitStartWith(object, substring) {
    return (0, _type.isitString)(object) && (0, _type.isitString)(substring) && object.indexOf(substring) === 0;
};

/**
 * Alias function for startWith
 */
var isitStartsWith = exports.isitStartsWith = isitStartWith;

/**
 * Checks to see if string object is all uppercase
 *
 * @param {any} object
 * @returns {boolean}
 */
var isitUpperCase = exports.isitUpperCase = function isitUpperCase(object) {
    return (0, _type.isitString)(object) && object === object.toUpperCase();
};

/**
 * Functions we don't want to show in any or all
 */
var multiParamFunctions = exports.multiParamFunctions = ['endWith', 'include', 'startWith'];

exports.default = {
    camelCase: isitCamelCase,
    capitalized: isitCapitalized,
    endWith: isitEndWith,
    endsWith: isitEndsWith,
    include: isitInclude,
    includes: isitIncludes,
    kebabCase: isitKebabCase,
    lowerCase: isitLowerCase,
    palindrome: isitPalindrome,
    snakeCase: isitSnakeCase,
    startCase: isitStartCase,
    startWith: isitStartWith,
    startsWith: isitStartsWith,
    upperCase: isitUpperCase
};