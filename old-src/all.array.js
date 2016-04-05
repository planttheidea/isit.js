// all version of array.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitArray from "./array";

export default function isitAllArray() {
    return all(isitArray).apply(null, arraySlice.call(arguments));
}