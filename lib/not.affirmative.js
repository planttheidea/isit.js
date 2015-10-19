// not version of affirmative.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotAffirmative;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _affirmative = require("./affirmative");

var _affirmative2 = _interopRequireDefault(_affirmative);

function isitNotAffirmative() {
    return (0, _interfaces.not)(_affirmative2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];