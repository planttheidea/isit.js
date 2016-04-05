// any version of string.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitString from "./string";

export default function isitAnyString() {
    return any(isitString).apply(null, arraySlice.call(arguments));
}