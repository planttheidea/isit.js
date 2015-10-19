// any version of uppercase.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitUppercase from "./uppercase";

export default function isitAnyUppercase() {
    return any(isitUppercase).apply(null, arraySlice.call(arguments));
}