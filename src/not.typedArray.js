// not version of typedArray.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitTypedArray from "./typedArray";

export default function isitNotUndefined() {
    return not(isitTypedArray).apply(null, arraySlice.call(arguments));
}