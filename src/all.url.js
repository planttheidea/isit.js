// all version of url.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitUrl from "./url";

export default function isitAllUrl() {
    return all(isitUrl).apply(null, arraySlice.call(arguments));
}