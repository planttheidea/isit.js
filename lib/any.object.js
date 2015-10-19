// any version of object.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnyObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _object = require("./object");

var _object2 = _interopRequireDefault(_object);

function isitAnyObject() {
    return _interfaces.any(_object2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];