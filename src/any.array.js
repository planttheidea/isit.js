// any version of array.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitArray from "./array";

export default function isitAnyArray() {
    return any(isitArray).apply(null, arraySlice.call(arguments));
}