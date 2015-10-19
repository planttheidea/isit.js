// not version of url.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitUrl from "./url";

export default function isitNotUrl() {
    return not(isitUrl).apply(null, arraySlice.call(arguments));
}