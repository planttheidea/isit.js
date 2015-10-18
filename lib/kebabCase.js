// is obj a string and is camelCase?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitKebabCase;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function isitKebabCase(obj) {
    if ((0, _interfaces.not)(_string2["default"])(obj)) {
        return false;
    }

    return obj === (0, _utils.toCamelCase)(obj).replace(/([A-Z])/g, function ($1) {
        return "-" + $1.toLowerCase();
    }).replace(/--/g, "-");
}

module.exports = exports["default"];