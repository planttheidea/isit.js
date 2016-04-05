// any version of today.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitToday from "./today";

export default function isitAnyToday() {
    return any(isitToday).apply(null, arraySlice.call(arguments));
}