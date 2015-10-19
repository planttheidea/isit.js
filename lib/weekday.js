// is obj a date and a weekday?

"use strict";

exports.__esModule = true;
exports["default"] = isitWeekday;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _date = require("./date");

var _date2 = _interopRequireDefault(_date);

function isitWeekday(obj) {
    if (_interfaces.not(_date2["default"])(obj)) {
        return false;
    }

    var day = obj.getDay();

    return day !== 6 && day !== 0;
}

module.exports = exports["default"];