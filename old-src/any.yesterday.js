// any version of yesterday.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitYesterday from "./yesterday";

export default function isitAnyYesterday() {
    return any(isitYesterday).apply(null, arraySlice.call(arguments));
}