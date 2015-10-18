"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isFuture;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _date = require("date");

var _date2 = _interopRequireDefault(_date);

function _isFuture(obj) {
    return (0, _date2["default"])(obj) && obj.getTime() > new Date().getTime();
}

module.exports = exports["default"];