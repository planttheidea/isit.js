// any version of domNodeList.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyDOMNodeList;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _domNodeList = require("./domNodeList");

var _domNodeList2 = _interopRequireDefault(_domNodeList);

function isitAnyDOMNodeList() {
    return (0, _interfaces.any)(_domNodeList2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];