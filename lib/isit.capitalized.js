"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isCapitalized;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isitString = require("isit.string");

var _isitString2 = _interopRequireDefault(_isitString);

var _isitTruthy = require("isit.truthy");

var _isitTruthy2 = _interopRequireDefault(_isitTruthy);

function isCapitalized(obj) {
    if ((0, _helpers.not)((0, _isitString2["default"])(obj))) {
        return false;
    }

    var words = obj.split(" "),
        capitalized = [];

    for (var i = 0, len = words.length; i < len; i++) {
        capitalized[i] = words[i][0] === words[i][0].toUpperCase();
    }

    return (0, _helpers.all)(_isitTruthy2["default"].apply(null, capitalized));
}

module.exports = exports["default"];