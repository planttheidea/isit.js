// is obj the window object?

"use strict";

exports.__esModule = true;
exports["default"] = isitWindowObject;

function isitWindowObject(obj) {
    return typeof obj === "object" && "setInterval" in obj;
}

module.exports = exports["default"];