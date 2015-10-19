// is obj a string and all lowercase?

"use strict";

exports.__esModule = true;
exports["default"] = isitLowercase;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function isitLowercase(obj) {
    return _string2["default"](obj) && obj === obj.toLowerCase();
}

module.exports = exports["default"];