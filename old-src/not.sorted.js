// not version of sorted.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitSorted from "./sorted";

export default function isitNotSorted() {
    return not(isitSorted).apply(null, arraySlice.call(arguments));
}