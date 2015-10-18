"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitObject;

function isitObject(obj) {
    var type = typeof obj;

    return type === "function" || type === "object";
}

module.exports = exports["default"];