// any version of number.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitNumber from "./number";

export default function isitAnyNumber() {
    return any(isitNumber).apply(null, arraySlice.call(arguments));
}