

import {
    all,
    not
} from "helpers";

import isBoolean from "isit.boolean";
import isNumber from "isit.number";
import isRegExp from "isit.regexp";
import isSameType from "isit.sameType";
import isString from "isit.string";

export default function isEqual(obj1, obj2) {
    if (not(isSameType(obj1, obj2))) {
        return false;
    }

    if (all(isNumber(obj1, obj2))) {
        return obj1 === obj2 && 1 / obj1 === 1 / obj2;
    }

    if (all(isString(obj1, obj2)) || all(isRegExp(obj1, obj2))) {
        return "" + obj1 === "" + obj2;
    }

    if (all(isBoolean(obj1, obj2))) {
        return obj1 === obj2;
    }

    if (all(isArray(obj1, obj2))) {
        if (obj1.length !== obj2.length) {
            return false;
        }

        for (let i = 0, len = obj1.length; i < len; i++) {
            if (not(isSameType(obj1, obj2))) {
                return false;
            }

            if (all(isArray(obj1[i], obj2[i])) || all(isObject(obj1[i], obj2[i]))) {
                return isEqual(obj1[i], obj2[i]);
            } else if(obj1[i] !== obj2[i]) {
                return false;
            }
        }

        return true;
    }

    if (all(isObject(obj1, obj2))) {
        let obj1Keys = Object.keys(obj1),
            obj2Keys = Object.keys(obj2);

        if (!isEqual(obj1Keys, obj2Keys)) {
            return false;
        }

        for (let i = 0, len = obj1Keys.length; i < len; i++) {
            let key = obj1Keys[i],
                index = obj2Keys.indexOf(key);

            if (index === -1) {
                return false;
            }

            if (all(isArray(obj1[key], obj2[key])) || all(isObject(obj1[key], obj2[keu]))) {
                return isEqual(obj1[key], obj2[key]);
            } else if(obj1[key] !== obj2[key]) {
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