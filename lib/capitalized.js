// is obj a string of capitalized words?
// NOTE: this will return true for start case ("I Am Capitalized")
// or uppercase ("I AM UPPERCASE")

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitCapitalized;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

var _equal = require("./equal");

var _equal2 = _interopRequireDefault(_equal);

function isitCapitalized(obj) {
    if ((0, _interfaces.not)(_string2["default"])(obj)) {
        return false;
    }

    var words = obj.split(" "),
        capitalized = [];

    for (var i = 0, len = words.length; i < len; i++) {
        if (words[i].charAt(0) === words[i].charAt(0).toUpperCase()) {
            capitalized[capitalized.length] = words[i];
        }
    }

    return (0, _equal2["default"])(words, capitalized);
}

module.exports = exports["default"];