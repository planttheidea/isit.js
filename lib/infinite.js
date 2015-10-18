// is obj not a finite value?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isInfinite;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _finite = require("./finite");

var _finite2 = _interopRequireDefault(_finite);

function isInfinite(obj) {
    return (0, _interfaces.not)(_finite2["default"])(obj);
}

module.exports = exports["default"];