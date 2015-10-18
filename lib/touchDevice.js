// is the device used a touch device?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitTouchDevice;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

function isitTouchDevice() {
    /* eslint-disable */
    return (0, _browser2["default"])() && "ontouchstart" in window || "DocumentTouch" in window && document instanceof DocumentTouch;
    /* eslint-enable */
}

module.exports = exports["default"];