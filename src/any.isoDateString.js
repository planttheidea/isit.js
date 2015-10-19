// any version of isoDateString.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitISODateString from "./isoDateString";

export default function isitAnyISODateString() {
    return any(isitISODateString).apply(null, arraySlice.call(arguments));
}