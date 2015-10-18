

import {not} from "helpers";
import _isArray from "array";

export default function _isInArray(obj, arr) {
    if (not(_isArray(arr))) {
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