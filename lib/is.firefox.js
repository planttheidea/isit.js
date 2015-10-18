"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isFirefox;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _isBrowser = require("is.browser");

var _isBrowser2 = _interopRequireDefault(_isBrowser);

function isFirefox() {
    return (0, _isBrowser2["default"])() && /firefox/i.test(_utils.navigatorInfo.userAgent);
}

module.exports = exports["default"];