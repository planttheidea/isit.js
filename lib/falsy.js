// is obj a falsy value?
// NOTE: matches language, returns true for undefined, null, 0, and ""

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitFalsy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _truthy = require("./truthy");

var _truthy2 = _interopRequireDefault(_truthy);

function isitFalsy(obj) {
    return (0, _interfaces.not)(_truthy2["default"])(obj);
}

;
module.exports = exports["default"];