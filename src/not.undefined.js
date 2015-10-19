// not version of undefined.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitUndefined from "./undefined";

export default function isitNotUndefined() {
    return not(isitUndefined).apply(null, arraySlice.call(arguments));
}