"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isWindowObject;

function _isWindowObject(obj) {
    return typeof obj === "object" && "setInterval" in obj;
}

module.exports = exports["default"];