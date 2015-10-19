// not version of chrome.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotChrome;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _chrome = require("./chrome");

var _chrome2 = _interopRequireDefault(_chrome);

function isitNotChrome() {
    return (0, _interfaces.not)(_chrome2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];