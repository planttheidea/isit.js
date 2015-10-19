// not version of even.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotEven;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _even = require("./even");

var _even2 = _interopRequireDefault(_even);

function isitNotEven() {
    return _interfaces.not(_even2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];