"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isOnline;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _browser = require("browser");

var _browser2 = _interopRequireDefault(_browser);

function _isOnline() {
    return (0, _browser2["default"])() && navigator.onLine;
}

module.exports = exports["default"];