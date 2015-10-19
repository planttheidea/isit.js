// is obj NaN (Not A Number)?

"use strict";

exports.__esModule = true;
exports["default"] = isitNaN;

function isitNaN(obj) {
    return obj !== obj;
}

module.exports = exports["default"];