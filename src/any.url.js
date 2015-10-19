// any version of url.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitUrl from "./url";

export default function isitAnyUrl() {
    return any(isitUrl).apply(null, arraySlice.call(arguments));
}