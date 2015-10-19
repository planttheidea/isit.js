// any version of windowObject.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnyWindowObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _windowObject = require("./windowObject");

var _windowObject2 = _interopRequireDefault(_windowObject);

function isitAnyWindowObject() {
    return _interfaces.any(_windowObject2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];