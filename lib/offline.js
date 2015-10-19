"use strict";

exports.__esModule = true;
exports["default"] = isitOffline;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _online = require("./online");

var _online2 = _interopRequireDefault(_online);

function isitOffline() {
    return !_online2["default"]();
}

module.exports = exports["default"];