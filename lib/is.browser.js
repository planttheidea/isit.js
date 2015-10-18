"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isBrowser;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isNode = require("is.node");

var _isNode2 = _interopRequireDefault(_isNode);

function isBrowser() {
    return !(0, _isNode2["default"])();
}

module.exports = exports["default"];