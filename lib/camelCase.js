// is obj a string and is camelCase?

"use strict";

exports.__esModule = true;
exports["default"] = isitCamelCase;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function isitCamelCase(obj) {
    if (_interfaces.not(_string2["default"])(obj)) {
        return false;
    }

    return obj === _utils.toCamelCase(obj);
}

module.exports = exports["default"];