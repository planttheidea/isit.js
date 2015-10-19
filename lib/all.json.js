// all version of json.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAllJSON;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _json = require("./json");

var _json2 = _interopRequireDefault(_json);

function isitAllJSON() {
    return (0, _interfaces.all)(_json2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];