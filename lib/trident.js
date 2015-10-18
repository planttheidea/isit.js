"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isTrident;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _browser = require("browser");

var _browser2 = _interopRequireDefault(_browser);

function _isTrident() {
    return (0, _browser2["default"])() && /trident/i.test(_utils.navigatorInfo.userAgent);
}

module.exports = exports["default"];