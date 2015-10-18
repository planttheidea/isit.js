// is obj a date and is it the same as today?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitToday;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _date = require("./date");

var _date2 = _interopRequireDefault(_date);

function isitToday(obj) {
    return (0, _date2["default"])(obj) && obj.toDateString() === new Date().toDateString();
}

module.exports = exports["default"];