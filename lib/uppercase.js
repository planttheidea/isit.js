// is obj a string and is it all uppercase?

"use strict";

exports.__esModule = true;
exports["default"] = isitUppercase;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function isitUppercase(obj) {
    return _string2["default"](obj) && obj === obj.toUpperCase();
}

module.exports = exports["default"];