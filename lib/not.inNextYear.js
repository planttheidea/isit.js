// not version of inNextYear.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotInNextYear;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _inNextYear = require("./inNextYear");

var _inNextYear2 = _interopRequireDefault(_inNextYear);

function isitNotInNextYear() {
    return _interfaces.not(_inNextYear2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];