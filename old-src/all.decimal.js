// all version of decimal.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDecimal from "./decimal";

export default function isitAllDecimal() {
    return all(isitDecimal).apply(null, arraySlice.call(arguments));
}