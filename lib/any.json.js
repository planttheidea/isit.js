// any version of json.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnyJSON;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _json = require("./json");

var _json2 = _interopRequireDefault(_json);

function isitAnyJSON() {
    return _interfaces.any(_json2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];