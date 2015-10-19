// not version of startCase.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotStartCase;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _startCase = require("./startCase");

var _startCase2 = _interopRequireDefault(_startCase);

function isitNotStartCase() {
    return (0, _interfaces.not)(_startCase2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];