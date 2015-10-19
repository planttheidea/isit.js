// is obj in the future compared to now?

"use strict";

exports.__esModule = true;
exports["default"] = isitFuture;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _date = require("./date");

var _date2 = _interopRequireDefault(_date);

function isitFuture(obj) {
    return _date2["default"](obj) && obj.getTime() > new Date().getTime();
}

module.exports = exports["default"];