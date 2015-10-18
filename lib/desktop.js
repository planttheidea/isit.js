"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitDesktop;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _browser = require("browser");

var _browser2 = _interopRequireDefault(_browser);

var _mobile = require("mobile");

var _mobile2 = _interopRequireDefault(_mobile);

var _tablet = require("tablet");

var _tablet2 = _interopRequireDefault(_tablet);

function isitDesktop() {
    return (0, _browser2["default"])() && !(0, _mobile2["default"])() && !(0, _tablet2["default"])();
}

module.exports = exports["default"];