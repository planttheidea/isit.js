// any version of past.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitPast from "./past";

export default function isitAnyPast() {
    return any(isitPast).apply(null, arraySlice.call(arguments));
}