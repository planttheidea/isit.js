// any version of datestring.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDateString from "./dateString";

export default function isitAnyDateString() {
    return any(isitDateString).apply(null, arraySlice.call(arguments));
}