// not version of dataUrl.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotDataUrl;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _dataUrl = require("./dataUrl");

var _dataUrl2 = _interopRequireDefault(_dataUrl);

function isitNotDataUrl() {
    return _interfaces.not(_dataUrl2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];