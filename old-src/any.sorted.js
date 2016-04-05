// any version of sorted.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitSorted from "./sorted";

export default function isitAnySorted() {
    return any(isitSorted).apply(null, arraySlice.call(arguments));
}