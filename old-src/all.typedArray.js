// all version of typedArray.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitTypedArray from "./typedArray";

export default function isitAllUndefined() {
    return all(isitTypedArray).apply(null, arraySlice.call(arguments));
}