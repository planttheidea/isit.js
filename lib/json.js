"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitJSON;

var _utils = require("./utils");

function isitJSON(obj) {
    return _utils.toString.call(obj) === "[object Object]";
}

module.exports = exports["default"];