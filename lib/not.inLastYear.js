// not version of inLastYear.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotInLastYear;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _inLastYear = require("./inLastYear");

var _inLastYear2 = _interopRequireDefault(_inLastYear);

function isitNotInLastYear() {
    return _interfaces.not(_inLastYear2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];