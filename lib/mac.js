// is the device used a Mac?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitMac;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _navigator = require("./_navigator");

var _navigator2 = _interopRequireDefault(_navigator);

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

function isitMac() {
    return (0, _browser2["default"])() && /mac/i.test(_navigator2["default"].appVersion);
}

module.exports = exports["default"];