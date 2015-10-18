"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isSpace;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitChar = require("isit.char");

var _isitChar2 = _interopRequireDefault(_isitChar);

function isSpace(obj) {
    if ((0, _isitChar2["default"])(obj)) {
        var charCode = obj.charCodeAt(0);

        return charCode > 0 && charCode < 14 || charCode === 32;
    }

    return false;
}

module.exports = exports["default"];