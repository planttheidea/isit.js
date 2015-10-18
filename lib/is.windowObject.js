"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isWindowObject;

function isWindowObject(obj) {
    return typeof obj === "object" && "setInterval" in obj;
}

module.exports = exports["default"];