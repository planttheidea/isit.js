// is obj a typed array value?

"use strict";

exports.__esModule = true;
exports["default"] = isitTypedArray;

var _utils = require("./_utils");

function isitTypedArray(obj) {
    switch (_utils.toString.call(obj)) {
        case "[object Int8Array]":
        case "[object Uint8Array]":
        case "[object Unit8ClampedArray]":
        case "[object Int16Array]":
        case "[object Unit16Array]":
        case "[object Int32Array]":
        case "[object Unit32Array]":
        case "[object Float32Array]":
        case "[object Float64Array]":
            return true;
    }

    return false;
}

module.exports = exports["default"];