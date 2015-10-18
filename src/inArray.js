

import {not} from "helpers";
import isitArray from "array";

export default function isitInArray(obj, arr) {
    if (not(isitArray(arr))) {
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