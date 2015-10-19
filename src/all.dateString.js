// all version of datestring.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDateString from "./dateString";

export default function isitAllDateString() {
    return all(isitDateString).apply(null, arraySlice.call(arguments));
}