// any version of timeString.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitTimeString from "./timeString";

export default function isitAnyTimeString() {
    return any(isitTimeString).apply(null, arraySlice.call(arguments));
}