// simple polyfill for Number.EPSILON

"use strict";

exports.__esModule = true;
exports["default"] = "EPSILON" in Number ? Number.EPSILON : 2.220446049250313e-16;
module.exports = exports["default"];