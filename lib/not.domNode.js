// not version of domNode.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotDOMNode;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _domNode = require("./domNode");

var _domNode2 = _interopRequireDefault(_domNode);

function isitNotDOMNode() {
    return _interfaces.not(_domNode2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];