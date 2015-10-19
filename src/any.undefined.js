// any version of undefined.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitUndefined from "./undefined";

export default function isitAnyUndefined() {
    return any(isitUndefined).apply(null, arraySlice.call(arguments));
}