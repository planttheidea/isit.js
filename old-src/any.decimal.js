// any version of decimal.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDecimal from "./decimal";

export default function isitAnyDecimal() {
    return any(isitDecimal).apply(null, arraySlice.call(arguments));
}