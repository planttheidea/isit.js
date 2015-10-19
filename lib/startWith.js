// is obj a string and does it start with startStr?

"use strict";

exports.__esModule = true;
exports["default"] = isitStartWith;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function isitStartWith(obj, startStr) {
    return _string2["default"](obj) && obj.indexOf(startStr) === 0;
}

module.exports = exports["default"];