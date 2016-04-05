// any version of negative.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitNegative from "./negative";

export default function isitAnyNegative() {
    return any(isitNegative).apply(null, arraySlice.call(arguments));
}