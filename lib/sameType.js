// is obj1 and obj2 the same type?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitSameType;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("./helpers");

var _utils = require("./utils");

var _nanJs = require("./nan.js");

var _nanJs2 = _interopRequireDefault(_nanJs);

function isitSameType(obj1, obj2) {
    if ((0, _helpers.all)(_nanJs2["default"])(obj1, obj2)) {
        return (0, _nanJs2["default"])(obj1) === (0, _nanJs2["default"])(obj2);
    }

    return _utils.toString.call(obj1) === _utils.toString.call(obj2);
}

module.exports = exports["default"];