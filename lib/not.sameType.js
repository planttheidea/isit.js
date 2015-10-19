// not version of sameType.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotSameType;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _sameType = require("./sameType");

var _sameType2 = _interopRequireDefault(_sameType);

function isitNotSameType() {
    return _interfaces.not(_sameType2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];