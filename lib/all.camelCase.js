// all version of camelCase.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAllCamelCase;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _camelCase = require("./camelCase");

var _camelCase2 = _interopRequireDefault(_camelCase);

function isitAllCamelCase() {
    return _interfaces.all(_camelCase2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];