// any version of camelCase.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnyCamelCase;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _camelCase = require("./camelCase");

var _camelCase2 = _interopRequireDefault(_camelCase);

function isitAnyCamelCase() {
    return _interfaces.any(_camelCase2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];