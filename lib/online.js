"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitOnline;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

function isitOnline() {
    return (0, _browser2["default"])() && navigator.onLine;
}

module.exports = exports["default"];