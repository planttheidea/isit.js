

import {
    all,
    not
} from "helpers";

import _isArray from "array";
import _isBoolean from "boolean";
import _isNumber from "number";
import _isObject from "object";
import _isRegExp from "regexp";
import _isSameType from "sameType";
import _isString from "string";

export default function _isEqual(obj1, obj2) {
    if (not(_isSameType(obj1, obj2))) {
        return false;
    }

    if (all(_isNumber(obj1, obj2))) {
        return obj1 === obj2 && 1 / obj1 === 1 / obj2;
    }

    if (all(_isString(obj1, obj2)) || all(_isRegExp(obj1, obj2))) {
        return "" + obj1 === "" + obj2;
    }

    if (all(_isBoolean(obj1, obj2))) {
        return obj1 === obj2;
    }

    if (all(_isArray(obj1, obj2))) {
        if (obj1.length !== obj2.length) {
            return false;
        }

        for (let i = 0, len = obj1.length; i < len; i++) {
            if (not(_isSameType(obj1, obj2))) {
                return false;
            }

            if (all(_isArray(obj1[i], obj2[i])) || all(_isObject(obj1[i], obj2[i]))) {
                return _isEqual(obj1[i], obj2[i]);
            } else if(obj1[i] !== obj2[i]) {
                return false;
            }
        }

        return true;
    }

    if (all(_isObject(obj1, obj2))) {
        let obj1Keys = Object.keys(obj1),
            obj2Keys = Object.keys(obj2);

        if (!_isEqual(obj1Keys, obj2Keys)) {
            return false;
        }

        for (let i = 0, len = obj1Keys.length; i < len; i++) {
            let key = obj1Keys[i],
                index = obj2Keys.indexOf(key);

            if (index === -1) {
                return false;
            }

            if (all(_isArray(obj1[key], obj2[key])) || all(_isObject(obj1[key], obj2[key]))) {
                return _isEqual(obj1[key], obj2[key]);
            } else if(obj1[key] !== obj2[key]) {
                return false;
            }

            obj2Keys.splice(index, 1);
        }

        return obj2Keys.length === 0;
    }

    return false;
}