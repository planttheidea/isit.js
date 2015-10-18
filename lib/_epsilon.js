// simple polyfill for Number.EPSILON

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = "EPSILON" in Number ? Number.EPSILON : 2.220446049250313e-16;
module.exports = exports["default"];