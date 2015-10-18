

import isArray from "isit.array";
import isArguments from "isit.arguments";
import isObject from "isit.object";

export default function isEmpty(obj) {
    if (isObject(obj)) {
        let num = Object.getOwnPropertyNames(obj).length;

        return num === 0 || num === 1 && isArray(obj) || num === 2 && isArguments(obj);
    }

    return value === "";
}