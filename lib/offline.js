"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitOffline;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _online = require("online");

var _online2 = _interopRequireDefault(_online);

function isitOffline() {
    return !(0, _online2["default"])();
}

module.exports = exports["default"];