// all version of sorted.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitSorted from "./sorted";

export default function isitAllSorted() {
    return all(isitSorted).apply(null, arraySlice.call(arguments));
}