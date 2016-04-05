// not version of datestring.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDateString from "./dateString";

export default function isitNotDateString() {
    return not(isitDateString).apply(null, arraySlice.call(arguments));
}