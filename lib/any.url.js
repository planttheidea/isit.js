// any version of url.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyUrl;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _url = require("./url");

var _url2 = _interopRequireDefault(_url);

function isitAnyUrl() {
    return (0, _interfaces.any)(_url2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];