// is obj an empty object / array, or not have a value?

import isitArray from "array";
import isitArguments from "arguments";
import isitNull from "null";
import isitObject from "object";
import isitUndefined from "undefined";

export default function isitEmpty(obj) {
    if (isitObject(obj)) {
        let num = Object.getOwnPropertyNames(obj).length;

        return num === 0 || num === 1 && isitArray(obj) || num === 2 && isitArguments(obj);
    }

    return obj === "" || isitNull(obj) || isitUndefined(obj);
}