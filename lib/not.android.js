// not version of android.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotAndroid;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _android = require("./android");

var _android2 = _interopRequireDefault(_android);

function isitNotAndroid() {
    return (0, _interfaces.not)(_android2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];