// is obj a finite value?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitFinite;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _nanJs = require("./nan.js");

var _nanJs2 = _interopRequireDefault(_nanJs);

function isitFinite(obj) {
    return obj !== Infinity && obj !== -Infinity && (0, _interfaces.not)(_nanJs2["default"])(obj);
}

;;
module.exports = exports["default"];