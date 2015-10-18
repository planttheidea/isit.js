"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isTomorrow;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _date = require("date");

var _date2 = _interopRequireDefault(_date);

function _isTomorrow(obj) {
    if (!(0, _date2["default"])(obj)) {
        return false;
    }

    var now = new Date(),
        tomorrowString = new Date(now.setDate(now.getDate() + 1).toDateString());

    return obj.toDateString() === tomorrowString;
}

module.exports = exports["default"];