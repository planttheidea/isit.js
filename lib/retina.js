// does the device used have a retina screen?

"use strict";

exports.__esModule = true;
exports["default"] = isitRetina;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

function isitRetina() {
    if (_browser2["default"]() && window.matchMedia) {
        var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and " + "(-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen " + "and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");

        return mq && mq.matches || window.devicePixelRatio > 1;
    }
}

module.exports = exports["default"];