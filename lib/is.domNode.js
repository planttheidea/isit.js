"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isDomNode;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isObject = require("is.object");

var _isObject2 = _interopRequireDefault(_isObject);

function isDomNode(obj) {
    return (0, _isObject2["default"])(obj) && obj.nodeType > 0;
}

module.exports = exports["default"];