// not version of propertyCount.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotPropertyCount;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _propertyCount = require("./propertyCount");

var _propertyCount2 = _interopRequireDefault(_propertyCount);

function isitNotPropertyCount() {
    return _interfaces.not(_propertyCount2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];