// not version of camelCase.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotCamelCase;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _camelCase = require("./camelCase");

var _camelCase2 = _interopRequireDefault(_camelCase);

function isitNotCamelCase() {
    return (0, _interfaces.not)(_camelCase2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];