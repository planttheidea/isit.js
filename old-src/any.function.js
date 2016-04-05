// any version of function.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitFunction from "./function";

export default function isitAnyFunction() {
    return any(isitFunction).apply(null, arraySlice.call(arguments));
}