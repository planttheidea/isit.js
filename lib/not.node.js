// not version of node.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotNode;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _node = require("./node");

var _node2 = _interopRequireDefault(_node);

function isitNotNode() {
    return (0, _interfaces.not)(_node2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];