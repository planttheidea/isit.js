// is obj a string, and does it end with endStr?

"use strict";

exports.__esModule = true;
exports["default"] = isitEndWith;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function isitEndWith(obj, endStr) {
    return _string2["default"](obj) && obj.indexOf(endStr) === obj.length - endStr.length;
}

module.exports = exports["default"];