"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isObject;

function isObject(obj) {
    var type = typeof obj;
    return type === "function" || type === "object";
}

module.exports = exports["default"];