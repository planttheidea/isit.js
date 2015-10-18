"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isEqual;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isitBoolean = require("isit.boolean");

var _isitBoolean2 = _interopRequireDefault(_isitBoolean);

var _isitNumber = require("isit.number");

var _isitNumber2 = _interopRequireDefault(_isitNumber);

var _isitRegexp = require("isit.regexp");

var _isitRegexp2 = _interopRequireDefault(_isitRegexp);

var _isitSameType = require("isit.sameType");

var _isitSameType2 = _interopRequireDefault(_isitSameType);

var _isitString = require("isit.string");

var _isitString2 = _interopRequireDefault(_isitString);

function isEqual(_x, _x2) {
    var _again = true;

    _function: while (_again) {
        var obj1 = _x,
            obj2 = _x2;
        i = len = obj1Keys = obj2Keys = i = len = key = index = undefined;
        _again = false;

        if ((0, _helpers.not)((0, _isitSameType2["default"])(obj1, obj2))) {
            return false;
        }

        if ((0, _helpers.all)((0, _isitNumber2["default"])(obj1, obj2))) {
            return obj1 === obj2 && 1 / obj1 === 1 / obj2;
        }

        if ((0, _helpers.all)((0, _isitString2["default"])(obj1, obj2)) || (0, _helpers.all)((0, _isitRegexp2["default"])(obj1, obj2))) {
            return "" + obj1 === "" + obj2;
        }

        if ((0, _helpers.all)((0, _isitBoolean2["default"])(obj1, obj2))) {
            return obj1 === obj2;
        }

        if ((0, _helpers.all)(isArray(obj1, obj2))) {
            if (obj1.length !== obj2.length) {
                return false;
            }

            for (var i = 0, len = obj1.length; i < len; i++) {
                if ((0, _helpers.not)((0, _isitSameType2["default"])(obj1, obj2))) {
                    return false;
                }

                if ((0, _helpers.all)(isArray(obj1[i], obj2[i])) || (0, _helpers.all)(isObject(obj1[i], obj2[i]))) {
                    _x = obj1[i];
                    _x2 = obj2[i];
                    _again = true;
                    continue _function;
                } else if (obj1[i] !== obj2[i]) {
                    return false;
                }
            }

            return true;
        }

        if ((0, _helpers.all)(isObject(obj1, obj2))) {
            var obj1Keys = Object.keys(obj1),
                obj2Keys = Object.keys(obj2);

            if (!isEqual(obj1Keys, obj2Keys)) {
                return false;
            }

            for (var i = 0, len = obj1Keys.length; i < len; i++) {
                var key = obj1Keys[i],
                    index = obj2Keys.indexOf(key);

                if (index === -1) {
                    return false;
                }

                if ((0, _helpers.all)(isArray(obj1[key], obj2[key])) || (0, _helpers.all)(isObject(obj1[key], obj2[keu]))) {
                    _x = obj1[key];
                    _x2 = obj2[key];
                    _again = true;
                    continue _function;
                } else if (obj1[key] !== obj2[key]) {
                    return false;
                }

                obj2Keys.splice(index, 1);
            }

            if (obj2Keys.length !== -1) {
                return false;
            }

            return true;
        }

        return false;
    }
}

module.exports = exports["default"];