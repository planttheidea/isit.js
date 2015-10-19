// not version of inLastYear.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotInLastYear;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _inLastYear = require("./inLastYear");

var _inLastYear2 = _interopRequireDefault(_inLastYear);

function isitNotInLastYear() {
    return (0, _interfaces.not)(_inLastYear2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];