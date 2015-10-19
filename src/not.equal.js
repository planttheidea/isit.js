// not version of equal.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitEqual from "./equal";

export default function isitNotEqual() {
    return not(isitEqual).apply(null, arraySlice.call(arguments));
}