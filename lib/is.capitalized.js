"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isCapitalized;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isString = require("is.string");

var _isString2 = _interopRequireDefault(_isString);

var _isTruthy = require("is.truthy");

var _isTruthy2 = _interopRequireDefault(_isTruthy);

function isCapitalized(obj) {
    if ((0, _helpers.not)((0, _isString2["default"])(obj))) {
        return false;
    }

    var words = obj.split(" "),
        capitalized = [];

    for (var i = 0, len = words.length; i < len; i++) {
        capitalized[i] = words[i][0] === words[i][0].toUpperCase();
    }

    return (0, _helpers.all)(_isTruthy2["default"].apply(null, capitalized));
}

module.exports = exports["default"];