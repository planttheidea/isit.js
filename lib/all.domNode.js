// all version of domNode.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAllDOMNode;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _domNode = require("./domNode");

var _domNode2 = _interopRequireDefault(_domNode);

function isitAllDOMNode() {
    return (0, _interfaces.all)(_domNode2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];