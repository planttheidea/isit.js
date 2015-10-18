// is obj1 and obj2 equal?
// NOTE: for arrays and objects, will check deeply via recursive calls

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitEqual;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _array = require("array");

var _array2 = _interopRequireDefault(_array);

var _boolean = require("boolean");

var _boolean2 = _interopRequireDefault(_boolean);

var _number = require("number");

var _number2 = _interopRequireDefault(_number);

var _object = require("object");

var _object2 = _interopRequireDefault(_object);

var _regexp = require("regexp");

var _regexp2 = _interopRequireDefault(_regexp);

var _sameType = require("sameType");

var _sameType2 = _interopRequireDefault(_sameType);

var _string = require("string");

var _string2 = _interopRequireDefault(_string);

function isitEqual(_x, _x2) {
    var _again = true;

    _function: while (_again) {
        var obj1 = _x,
            obj2 = _x2;
        i = len = obj1Keys = obj2Keys = i = len = key = index = undefined;
        _again = false;

        if ((0, _helpers.not)(_sameType2["default"])(obj1, obj2)) {
            return false;
        }

        if ((0, _helpers.all)(_number2["default"])(obj1, obj2)) {
            return obj1 === obj2 && 1 / obj1 === 1 / obj2;
        }

        if ((0, _helpers.all)(_string2["default"])(obj1, obj2) || (0, _helpers.all)(_regexp2["default"])(obj1, obj2)) {
            return "" + obj1 === "" + obj2;
        }

        if ((0, _helpers.all)(_boolean2["default"])(obj1, obj2)) {
            return obj1 === obj2;
        }

        if ((0, _helpers.all)(_array2["default"])(obj1, obj2)) {
            if (obj1.length !== obj2.length) {
                return false;
            }

            for (var i = 0, len = obj1.length; i < len; i++) {
                if ((0, _helpers.not)(_sameType2["default"])(obj1, obj2)) {
                    return false;
                }

                if ((0, _helpers.all)(_array2["default"])(obj1[i], obj2[i]) || (0, _helpers.all)(_object2["default"])(obj1[i], obj2[i])) {
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

        if ((0, _helpers.all)(_object2["default"])(obj1, obj2)) {
            var obj1Keys = Object.keys(obj1),
                obj2Keys = Object.keys(obj2);

            if (!isitEqual(obj1Keys, obj2Keys)) {
                return false;
            }

            for (var i = 0, len = obj1Keys.length; i < len; i++) {
                var key = obj1Keys[i],
                    index = obj2Keys.indexOf(key);

                if (index === -1) {
                    return false;
                }

                if ((0, _helpers.all)(_array2["default"])(obj1[key], obj2[key]) || (0, _helpers.all)(_object2["default"])(obj1[key], obj2[key])) {
                    _x = obj1[key];
                    _x2 = obj2[key];
                    _again = true;
                    continue _function;
                } else if (obj1[key] !== obj2[key]) {
                    return false;
                }

                obj2Keys.splice(index, 1);
            }

            return obj2Keys.length === 0;
        }

        return false;
    }
}

module.exports = exports["default"];