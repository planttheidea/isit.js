"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require("./utils");

exports["default"] = Array.isArray || function isitArray(obj) {
    return _utils.toString.call(obj) === "[object Array]";
};

module.exports = exports["default"];