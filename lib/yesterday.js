// is obj a date and is it yesterday?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitYesterday;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _date = require("./date");

var _date2 = _interopRequireDefault(_date);

function isitYesterday(obj) {
    var now = new Date(),
        yesterdayString = new Date(now.setDate(now.getDate() - 1).toDateString());

    return (0, _date2["default"])(obj) && obj.toDateString() === yesterdayString;
}

module.exports = exports["default"];