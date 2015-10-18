

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

    return false;
}