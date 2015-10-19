// any version of affirmative.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnyAffirmative;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _affirmative = require("./affirmative");

var _affirmative2 = _interopRequireDefault(_affirmative);

function isitAnyAffirmative() {
    return _interfaces.any(_affirmative2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];