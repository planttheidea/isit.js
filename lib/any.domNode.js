// any version of domNode.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyDOMNode;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _domNode = require("./domNode");

var _domNode2 = _interopRequireDefault(_domNode);

function isitAnyDOMNode() {
    return (0, _interfaces.any)(_domNode2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];