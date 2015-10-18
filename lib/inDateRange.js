"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isInDateRange;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _date = require("date");

var _date2 = _interopRequireDefault(_date);

function _isInDateRange(obj, startObj, endObj) {
    if (!(0, _date2["default"])(obj) || !(0, _date2["default"])(startObj) || !(0, _date2["default"])(endObj)) {
        return false;
    }

    var objTime = obj.getTime();

    return objTime > startObj.getTime() && objTime < endObj.getTime();
}

module.exports = exports["default"];