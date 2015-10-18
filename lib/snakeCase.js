// is obj a string and is camelCase?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitSnakeCase;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("./helpers");

var _utils = require("./utils");

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function isitSnakeCase(obj) {
    if ((0, _helpers.not)(_string2["default"])(obj)) {
        return false;
    }

    return obj === (0, _utils.toCamelCase)(obj).replace(/([A-Z])/g, function ($1) {
        return "_" + $1.toLowerCase();
    });
}

module.exports = exports["default"];