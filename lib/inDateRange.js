// are obj, startObj, and endObj all date values, and does obj exist in the range created by
// startObj and endObj?

"use strict";

exports.__esModule = true;
exports["default"] = isitInDateRange;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _date = require("./date");

var _date2 = _interopRequireDefault(_date);

function isitInDateRange(obj, startObj, endObj) {
    if (_interfaces.all(_interfaces.not(_date2["default"]))(obj, startObj, endObj)) {
        return false;
    }

    var objTime = obj.getTime();

    return objTime > startObj.getTime() && objTime < endObj.getTime();
}

module.exports = exports["default"];