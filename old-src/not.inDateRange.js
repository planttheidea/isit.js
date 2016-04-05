// not version of inDateRange.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitInDateRange from "./inDateRange";

export default function isitNotInDateRange() {
    return not(isitInDateRange).apply(null, arraySlice.call(arguments));
}