"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isInDateRange;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitDate = require("isit.date");

var _isitDate2 = _interopRequireDefault(_isitDate);

function isInDateRange(obj, startObj, endObj) {
    if (!(0, _isitDate2["default"])(obj) || !(0, _isitDate2["default"])(startObj) || !(0, _isitDate2["default"])(endObj)) {
        return false;
    }

    var objTime = obj.getTime();

    return objTime > startObj.getTime() && objTime < endObj.getTime();
}

module.exports = exports["default"];