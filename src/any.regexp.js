// any version of regexp.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitRegExp from "./regexp";

export default function isitAnyRegExp() {
    return any(isitRegExp).apply(null, arraySlice.call(arguments));
}