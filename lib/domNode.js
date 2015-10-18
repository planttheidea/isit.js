// is obj a DOM node value?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitDomNode;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _object = require("./object");

var _object2 = _interopRequireDefault(_object);

function isitDomNode(obj) {
    return (0, _object2["default"])(obj) && obj.nodeType > 0;
}

module.exports = exports["default"];