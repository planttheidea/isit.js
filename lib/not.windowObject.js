// not version of windowObject.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotWindowObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _windowObject = require("./windowObject");

var _windowObject2 = _interopRequireDefault(_windowObject);

function isitNotWindowObject() {
    return (0, _interfaces.not)(_windowObject2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];