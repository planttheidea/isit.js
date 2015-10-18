"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isDomNode;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitObject = require("isit.object");

var _isitObject2 = _interopRequireDefault(_isitObject);

function isDomNode(obj) {
    return (0, _isitObject2["default"])(obj) && obj.nodeType > 0;
}

module.exports = exports["default"];