// any version of ukPostCode.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitUKPostCode from "./ukPostCode";

export default function isitAnyUKPostCode() {
    return any(isitUKPostCode).apply(null, arraySlice.call(arguments));
}