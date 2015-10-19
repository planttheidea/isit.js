// not version of iPhone.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotIphone;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _iphone = require("./iphone");

var _iphone2 = _interopRequireDefault(_iphone);

function isitNotIphone() {
    return (0, _interfaces.not)(_iphone2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];