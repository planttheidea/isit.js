"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitCapitalized;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _string = require("string");

var _string2 = _interopRequireDefault(_string);

var _truthy = require("truthy");

var _truthy2 = _interopRequireDefault(_truthy);

function isitCapitalized(obj) {
    if ((0, _helpers.not)((0, _string2["default"])(obj))) {
        return false;
    }

    var words = obj.split(" "),
        capitalized = [];

    for (var i = 0, len = words.length; i < len; i++) {
        capitalized[i] = words[i][0] === words[i][0].toUpperCase();
    }

    return (0, _helpers.all)(_truthy2["default"].apply(null, capitalized));
}

module.exports = exports["default"];