"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isDaylightSavingTime;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitDate = require("isit.date");

var _isitDate2 = _interopRequireDefault(_isitDate);

function isDaylightSavingTime(obj) {
    if (!(0, _isitDate2["default"])(obj)) {
        return false;
    }

    var objYear = obj.getFullYear(),
        jan = new Date(objYear, 0, 1),
        jul = new Date(objYear, 6, 1);

    return obj.getTimezoneOffset() < Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}

module.exports = exports["default"];