

import {not} from "helpers";
import isArray from "isit.array";

export default function isInArray(obj, arr) {
    if (not(isArray(arr))) {
        return false;
    }

    let i = 0,
        len = arr.length;

    for (; i < len; i++) {
        if (arr[i] === obj) {
            return true;
        }
    }

    return false;
}