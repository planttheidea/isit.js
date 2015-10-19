// is obj a date and does it's timezone use daylight saving time?

"use strict";

exports.__esModule = true;
exports["default"] = isitDaylightSavingTime;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _date = require("./date");

var _date2 = _interopRequireDefault(_date);

function isitDaylightSavingTime(obj) {
    if (!_date2["default"](obj)) {
        return false;
    }

    var objYear = obj.getFullYear(),
        jan = new Date(objYear, 0, 1),
        jul = new Date(objYear, 6, 1);

    return obj.getTimezoneOffset() < Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}

module.exports = exports["default"];