// is obj a string and is camelCase?

"use strict";

exports.__esModule = true;
exports["default"] = isitKebabCase;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function isitKebabCase(obj) {
    if (_interfaces.not(_string2["default"])(obj)) {
        return false;
    }

    return obj === _utils.toCamelCase(obj).replace(/([A-Z])/g, function ($1) {
        return "-" + $1.toLowerCase();
    }).replace(/--/g, "-");
}

module.exports = exports["default"];