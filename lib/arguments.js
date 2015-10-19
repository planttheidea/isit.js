// is obj a set of function arguments?

"use strict";

exports.__esModule = true;
exports["default"] = isitArguments;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _null = require("./null");

var _null2 = _interopRequireDefault(_null);

function isitArguments(obj) {
    return _interfaces.not(_null2["default"])(obj) && _utils.toString.call(obj) === "[object Arguments]" || typeof obj === "object" && "callee" in obj;
}

module.exports = exports["default"];