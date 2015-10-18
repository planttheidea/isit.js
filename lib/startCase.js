// is obj a string and is camelCase?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitStartCase;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("./helpers");

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function isitStartCase(obj) {
    if ((0, _helpers.not)(_string2["default"])(obj)) {
        return false;
    }

    return obj === obj.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

module.exports = exports["default"];