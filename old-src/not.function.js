// not version of function.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitFunction from "./function";

export default function isitNotFunction() {
    return not(isitFunction).apply(null, arraySlice.call(arguments));
}