// any version of date.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDate from "./date";

export default function isitAnyDate() {
    return any(isitDate).apply(null, arraySlice.call(arguments));
}