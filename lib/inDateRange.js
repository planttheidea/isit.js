"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitInDateRange;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _date = require("date");

var _date2 = _interopRequireDefault(_date);

function isitInDateRange(obj, startObj, endObj) {
    if ((0, _helpers.all)((0, _helpers.not)(_date2["default"]))(obj, startObj, endObj)) {
        return false;
    }

    var objTime = obj.getTime();

    return objTime > startObj.getTime() && objTime < endObj.getTime();
}

module.exports = exports["default"];