// any version of infinite.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitInfinite from "./infinite";

export default function isitAnyInfinite() {
    return any(isitInfinite).apply(null, arraySlice.call(arguments));
}