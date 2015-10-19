// is obj a DOM node value?

"use strict";

exports.__esModule = true;
exports["default"] = isitDOMNode;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _object = require("./object");

var _object2 = _interopRequireDefault(_object);

function isitDOMNode(obj) {
    return _object2["default"](obj) && obj.nodeType > 0;
}

module.exports = exports["default"];