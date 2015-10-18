

import {not} from "helpers";
import isArray from "isit.array";

export default function isSorted(arr) {
    if (not(isArray(arr))) {
        return false;
    }

    let i = 0,
        len = arr.length;

    for (; i < len; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }

    return true;
}