"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isOffline;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isitOnline = require("isit.online");

var _isitOnline2 = _interopRequireDefault(_isitOnline);

function isOffline() {
    return (0, _helpers.not)(_isitOnline2["default"]);
}

module.exports = exports["default"];