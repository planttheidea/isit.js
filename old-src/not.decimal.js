// not version of decimal.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDecimal from "./decimal";

export default function isitNotDecimal() {
    return not(isitDecimal).apply(null, arraySlice.call(arguments));
}