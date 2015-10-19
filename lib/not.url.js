// not version of url.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotUrl;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _url = require("./url");

var _url2 = _interopRequireDefault(_url);

function isitNotUrl() {
    return _interfaces.not(_url2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];