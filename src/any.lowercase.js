// any version of lowercase.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitLowercase from "./lowercase";

export default function isitAnyLowercase() {
    return any(isitLowercase).apply(null, arraySlice.call(arguments));
}