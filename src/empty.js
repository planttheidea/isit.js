

import isitArray from "array";
import isitArguments from "arguments";
import isitObject from "object";

export default function isitEmpty(obj) {
    if (isitObject(obj)) {
        let num = Object.getOwnPropertyNames(obj).length;

        return num === 0 || num === 1 && isitArray(obj) || num === 2 && isitArguments(obj);
    }

    return obj === "";
}