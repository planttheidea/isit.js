// all version of function.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitFunction from "./function";

export default function isitAllFunction() {
    return all(isitFunction).apply(null, arraySlice.call(arguments));
}