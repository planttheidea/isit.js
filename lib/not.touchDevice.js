// not version of touchDevice.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotTouchDevice;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _touchDevice = require("./touchDevice");

var _touchDevice2 = _interopRequireDefault(_touchDevice);

function isitNotTouchDevice() {
    return _interfaces.not(_touchDevice2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];