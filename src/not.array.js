// not version of array.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitArray from "./array";

export default function isitNotArray() {
    return not(isitArray).apply(null, arraySlice.call(arguments));
}