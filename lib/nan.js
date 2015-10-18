// is obj NaN (Not A Number)?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNaN;

function isitNaN(obj) {
    return obj !== obj;
}

module.exports = exports["default"];