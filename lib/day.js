// is obj a date value and does it match the day string?

"use strict";

exports.__esModule = true;
exports["default"] = isitDay;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _dateNames = require("./_dateNames");

var _date = require("./date");

var _date2 = _interopRequireDefault(_date);

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

var _undefined = require("./undefined");

var _undefined2 = _interopRequireDefault(_undefined);

function isitDay(obj, dayString) {
    if (_undefined2["default"](dayString)) {
        dayString = _dateNames.days[new Date().getDay()];
    }

    return _date2["default"](obj) && _string2["default"](dayString) && dayString.toLowerCase() === _dateNames.days[obj.getDay()];
}

module.exports = exports["default"];