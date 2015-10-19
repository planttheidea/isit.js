// not version of string.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitString from "./string";

export default function isitNotString() {
    return not(isitString).apply(null, arraySlice.call(arguments));
}