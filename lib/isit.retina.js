"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isRetina;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitBrowser = require("isit.browser");

var _isitBrowser2 = _interopRequireDefault(_isitBrowser);

function isRetina() {
    if ((0, _isitBrowser2["default"])() && window.matchMedia) {
        var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and " + "(-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen " + "and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");

        return mq && mq.matches || window.devicePixelRatio > 1;
    }
}

module.exports = exports["default"];