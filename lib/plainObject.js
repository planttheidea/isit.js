// is obj a plain object?

"use strict";

exports.__esModule = true;
exports["default"] = isitPlainObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _function = require("./function");

var _function2 = _interopRequireDefault(_function);

var _null = require("./null");

var _null2 = _interopRequireDefault(_null);

var _object = require("./object");

var _object2 = _interopRequireDefault(_object);

function isitPlainObject(obj) {
    if (_null2["default"](obj) || _interfaces.not(_object2["default"])(obj)) {
        return false;
    }

    if (_function2["default"](Object.getPrototypeOf)) {
        var proto = Object.getPrototypeOf(obj);

        return proto === Object.prototype || _null2["default"](proto);
    }

    return _interfaces.not(_function2["default"])(obj);
}

module.exports = exports["default"];