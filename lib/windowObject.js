// is obj the window object?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitWindowObject;

function isitWindowObject(obj) {
    return typeof obj === "object" && "setInterval" in obj;
}

module.exports = exports["default"];