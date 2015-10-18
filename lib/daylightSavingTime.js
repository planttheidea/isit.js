"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitDaylightSavingTime;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _date = require("./date");

var _date2 = _interopRequireDefault(_date);

function isitDaylightSavingTime(obj) {
    if (!(0, _date2["default"])(obj)) {
        return false;
    }

    var objYear = obj.getFullYear(),
        jan = new Date(objYear, 0, 1),
        jul = new Date(objYear, 6, 1);

    return obj.getTimezoneOffset() < Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}

module.exports = exports["default"];