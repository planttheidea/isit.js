// not version of androidPhone.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotAndroidPhone;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _androidPhone = require("./androidPhone");

var _androidPhone2 = _interopRequireDefault(_androidPhone);

function isitNotAndroidPhone() {
    return _interfaces.not(_androidPhone2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];