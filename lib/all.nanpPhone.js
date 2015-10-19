// all version of nanpPhone.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAllNanpPhone;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _nanpPhone = require("./nanpPhone");

var _nanpPhone2 = _interopRequireDefault(_nanpPhone);

function isitAllNanpPhone() {
    return _interfaces.all(_nanpPhone2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];