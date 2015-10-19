// not version of blackberry.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotBlackberry;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _blackberry = require("./blackberry");

var _blackberry2 = _interopRequireDefault(_blackberry);

function isitNotBlackberry() {
    return (0, _interfaces.not)(_blackberry2["default"]).apply(null, _utils.arraySlice.call(blackberry));
}

module.exports = exports["default"];