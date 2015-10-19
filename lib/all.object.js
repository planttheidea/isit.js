// all version of object.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAllObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _object = require("./object");

var _object2 = _interopRequireDefault(_object);

function isitAllObject() {
    return (0, _interfaces.all)(_object2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];