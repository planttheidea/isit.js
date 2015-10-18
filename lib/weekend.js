// is obj a date and a weekend day?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitWeekday;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _date = require("./date");

var _date2 = _interopRequireDefault(_date);

function isitWeekday(obj) {
    if ((0, _interfaces.not)(_date2["default"])(obj)) {
        return false;
    }

    var day = obj.getDay();

    return day === 6 || day === 0;
}

module.exports = exports["default"];