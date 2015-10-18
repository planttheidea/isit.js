// is the device used an iPhone?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitIphone;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _browser = require("browser");

var _browser2 = _interopRequireDefault(_browser);

function isitIphone() {
    return (0, _browser2["default"])() && /iphone/i.test(_utils.navigatorInfo.userAgent);
}

module.exports = exports["default"];