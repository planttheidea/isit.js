// any version of odd.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitOdd from "./odd";

export default function isitAnyOdd() {
    return any(isitOdd).apply(null, arraySlice.call(arguments));
}