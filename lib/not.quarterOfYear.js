// not version of quarterOfYear.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotQuarterOfYear;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _quarterOfYear = require("./quarterOfYear");

var _quarterOfYear2 = _interopRequireDefault(_quarterOfYear);

function isitNotQuarterOfYear() {
    return (0, _interfaces.not)(_quarterOfYear2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];