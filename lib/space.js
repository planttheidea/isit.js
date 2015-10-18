"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isSpace;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _char = require("char");

var _char2 = _interopRequireDefault(_char);

function _isSpace(obj) {
    if ((0, _char2["default"])(obj)) {
        var charCode = obj.charCodeAt(0);

        return charCode > 0 && charCode < 14 || charCode === 32;
    }

    return false;
}

module.exports = exports["default"];