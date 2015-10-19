// all version of snakeCase.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAllSnakeCase;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _snakeCase = require("./snakeCase");

var _snakeCase2 = _interopRequireDefault(_snakeCase);

function isitAllSnakeCase() {
    return _interfaces.all(_snakeCase2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];