// not version of falsy.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotFalsy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _falsy = require("./falsy");

var _falsy2 = _interopRequireDefault(_falsy);

function isitNotFalsy() {
    return _interfaces.not(_falsy2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];