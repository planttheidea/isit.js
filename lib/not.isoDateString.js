// not version of isoDateString.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotISODateString;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _isoDateString = require("./isoDateString");

var _isoDateString2 = _interopRequireDefault(_isoDateString);

function isitNotISODateString() {
    return _interfaces.not(_isoDateString2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];