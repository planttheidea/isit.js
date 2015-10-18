// is arr an array, and does obj exist in it?

import {not} from "./helpers";
import isitArray from "./array";

export default function isitInArray(obj, arr) {
    if (not(isitArray)(arr)) {
        return false;
    }

    return arr.indexOf(obj) !== -1;
}