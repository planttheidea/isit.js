

import {not} from "helpers";
import _isArray from "array";

function isArraySortedAsc(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
        let next = arr[i + 1];

        if (typeof next !== "undefined" && arr[i] > next) {
            return false;
        }
    }

    return true;
}

function isArraySortedDesc(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
        let next = arr[i + 1];

        if (typeof next !== "undefined" && arr[i] < next) {
            return false;
        }
    }

    return true;
}

export default function _isSorted(arr) {
    if (not(_isArray(arr))) {
        return false;
    }

    return isArraySortedAsc(arr) || isArraySortedDesc(arr);
}