// is obj a NodeList value?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitDOMNodeList;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("./_utils");

var _object = require("./object");

var _object2 = _interopRequireDefault(_object);

function isitDOMNodeList(obj) {
    return (0, _object2["default"])(obj) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(_utils.toString.call(obj)) && _utils.hasOwnProperty.call(obj, "length") && obj.length === 0 || (0, _object2["default"])(obj[0]) && obj[0].nodeType > 0;
}

module.exports = exports["default"];