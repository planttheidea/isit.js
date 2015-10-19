// any version of typedArray.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitTypedArray from "./typedArray";

export default function isitAnyUndefined() {
    return any(isitTypedArray).apply(null, arraySlice.call(arguments));
}