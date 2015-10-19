// not version of inArray.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotInArray;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _inArray = require("./inArray");

var _inArray2 = _interopRequireDefault(_inArray);

function isitNotInArray() {
    return (0, _interfaces.not)(_inArray2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];