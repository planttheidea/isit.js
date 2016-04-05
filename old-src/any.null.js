// any version of null.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitNull from "./null";

export default function isitAnyNull() {
    return any(isitNull).apply(null, arraySlice.call(arguments));
}