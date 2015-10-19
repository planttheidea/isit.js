// not version of presto.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotPresto;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _presto = require("./presto");

var _presto2 = _interopRequireDefault(_presto);

function isitNotPresto() {
    return _interfaces.not(_presto2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];