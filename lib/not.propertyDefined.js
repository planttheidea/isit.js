// not version of propertyDefined.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotPropertyDefined;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _propertyDefined = require("./propertyDefined");

var _propertyDefined2 = _interopRequireDefault(_propertyDefined);

function isitNotPropertyDefined() {
    return (0, _interfaces.not)(_propertyDefined2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];