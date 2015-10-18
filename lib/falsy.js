"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitFalsy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _truthy = require("truthy");

var _truthy2 = _interopRequireDefault(_truthy);

function isitFalsy(obj) {
    return (0, _helpers.not)((0, _truthy2["default"])(obj));
}

;
module.exports = exports["default"];