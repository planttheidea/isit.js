// any version of alphanumeric.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitAlphaNumeric from "./alphaNumeric";

export default function isitAnyAlphaNumeric() {
    return any(isitAlphaNumeric).apply(null, arraySlice.call(arguments));
}